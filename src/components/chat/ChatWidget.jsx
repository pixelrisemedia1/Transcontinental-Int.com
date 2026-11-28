import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Loader2, Bot, Paperclip, AlertTriangle, ChevronDown } from "lucide-react";
import { base44 } from "@/api/base44Client";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";

function detectNavigation(text) {
  const match = (text || "").match(/\[navigate:(\w+)\]/);
  return match ? match[1] : null;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileUrls, fileUrlsSet] = useState([]);
  const [filePreviews, filePreviewsSet] = useState([]);
  const webAccess = true;
  const screenControl = true;
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    base44.auth.isAuthenticated().then(setIsAuth);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (!conversation) return;
    const unsub = base44.agents.subscribeToConversation(conversation.id, (data) => {
      const msgs = data.messages || [];
      setMessages(msgs);
      const lastAI = [...msgs].reverse().find(m => m.role === "assistant" && m.content);
      if (lastAI) {
        const page = detectNavigation(lastAI.content);
        if (page) setTimeout(() => navigate(createPageUrl(page)), 800);
      }
    });
    return () => unsub();
  }, [conversation?.id]);

  const startConversation = async () => {
    const conv = await base44.agents.createConversation({
      agent_name: "support_assistant",
      metadata: { name: "AI Assistant Chat" },
    });
    setConversation(conv);
    setMessages([{
      role: "assistant",
      content: "Hello! I'm Robert, your AI assistant. I can help answer questions, search the web, and navigate this site. How can I help you today?"
    }]);
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) startConversation();
  };

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setUploading(true);
    const urls = [];
    const previews = [];
    for (const file of files) {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      urls.push(file_url);
      if (file.type.startsWith("image/")) {
        previews.push({ type: "image", url: URL.createObjectURL(file), name: file.name });
      } else {
        previews.push({ type: "file", name: file.name });
      }
    }
    fileUrlsSet(prev => [...prev, ...urls]);
    filePreviewsSet(prev => [...prev, ...previews]);
    setUploading(false);
    e.target.value = "";
  };

  const removeFile = (idx) => {
    fileUrlsSet(f => f.filter((_, j) => j !== idx));
    filePreviewsSet(f => f.filter((_, j) => j !== idx));
  };

  const handleSend = async () => {
    if ((!input.trim() && fileUrls.length === 0) || sending || !conversation) return;
    const text = input.trim();
    const urls = [...fileUrls];
    setInput("");
    fileUrlsSet([]);
    filePreviewsSet([]);
    setSending(true);

    let fullContent = text || "Here are the attached files.";
    if (webAccess) fullContent += "\n[web_access:true]";
    if (screenControl) fullContent += "\n[screen_control:true]";

    await base44.agents.addMessage(conversation, {
      role: "user",
      content: fullContent,
      file_urls: urls.length ? urls : undefined,
    });
    setSending(false);
  };

  return (
    <>
      <style>{`
        @keyframes tc-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes tc-fadein { from { opacity: 0; transform: scale(0.9) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .tc-chat-panel { animation: tc-fadein 0.2s ease-out forwards; }
        .tc-fab { transition: transform 0.18s ease, box-shadow 0.18s ease; }
        .tc-fab:hover { transform: scale(1.08); }
        .tc-msg-scroll::-webkit-scrollbar { width: 4px; }
        .tc-msg-scroll::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 4px; }
      `}</style>

      {/* Fixed right bottom container */}
      <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 99999, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

        {/* Chat panel */}
        {isOpen && (
          <div
            className="tc-chat-panel"
            style={{
              width: "370px",
              maxWidth: "calc(100vw - 48px)",
              height: "580px",
              maxHeight: "calc(100vh - 100px)",
              background: "white",
              borderRadius: "18px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              marginBottom: "14px",
            }}
          >
            {/* Header */}
            <div style={{ background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)", padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(6,182,212,0.25)", border: "1px solid rgba(6,182,212,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Bot style={{ width: "17px", height: "17px", color: "#22d3ee" }} />
                </div>
                <div>
                  <p style={{ color: "white", fontSize: "14px", fontWeight: "700", margin: 0, letterSpacing: "0.01em" }}>Robert</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                    <p style={{ color: "#94a3b8", fontSize: "10px", margin: 0 }}>Online · Powered by AI</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: "rgba(255,255,255,0.08)", border: "none", cursor: "pointer", padding: "6px", borderRadius: "8px", display: "flex", transition: "background 0.15s" }}>
                <X style={{ width: "16px", height: "16px", color: "#94a3b8" }} />
              </button>
            </div>



            {/* Messages */}
            <div className="tc-msg-scroll" style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "10px", background: "#f9fafb" }}>
              {messages.filter(m => m.role !== "system" && m.content).map((msg, i) => (
                <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", alignItems: "flex-end", gap: "6px" }}>
                  {msg.role === "assistant" && (
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginBottom: "2px" }}>
                      <Bot style={{ width: "12px", height: "12px", color: "#22d3ee" }} />
                    </div>
                  )}
                  <div style={{
                    maxWidth: "80%", borderRadius: "16px", padding: "10px 14px", fontSize: "13.5px", lineHeight: "1.5",
                    background: msg.role === "user" ? "linear-gradient(135deg,#0ea5e9,#06b6d4)" : "white",
                    color: msg.role === "user" ? "white" : "#1e293b",
                    border: msg.role === "user" ? "none" : "1px solid #e2e8f0",
                    boxShadow: msg.role === "assistant" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
                    borderBottomRightRadius: msg.role === "user" ? "4px" : "16px",
                    borderBottomLeftRadius: msg.role === "assistant" ? "4px" : "16px",
                  }}>
                    {msg.role === "user" ? (
                      <p style={{ margin: 0 }}>{msg.content.replace(/\[web_access:true\]/g, "").replace(/\[screen_control:true\]/g, "").trim()}</p>
                    ) : (
                      <ReactMarkdown className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}
              {sending && (
                <div style={{ display: "flex", alignItems: "flex-end", gap: "6px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Bot style={{ width: "12px", height: "12px", color: "#22d3ee" }} />
                  </div>
                  <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: "16px", borderBottomLeftRadius: "4px", padding: "12px 16px", display: "flex", gap: "4px", alignItems: "center" }}>
                    {[0, 1, 2].map(d => (
                      <span key={d} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#94a3b8", display: "inline-block", animation: `tc-spin 1.2s ease-in-out ${d * 0.2}s infinite alternate` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* File previews */}
            {filePreviews.length > 0 && (
              <div style={{ padding: "8px 12px", background: "#f0f9ff", borderTop: "1px solid #bae6fd", display: "flex", flexWrap: "wrap", gap: "6px", flexShrink: 0 }}>
                {filePreviews.map((f, i) => (
                  <div key={i} style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
                    {f.type === "image" ? (
                      <img src={f.url} alt={f.name} style={{ width: "44px", height: "44px", objectFit: "cover", borderRadius: "8px", border: "1px solid #7dd3fc" }} />
                    ) : (
                      <span style={{ fontSize: "11px", background: "white", border: "1px solid #7dd3fc", color: "#0369a1", padding: "4px 8px", borderRadius: "8px", maxWidth: "100px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        📎 {f.name}
                      </span>
                    )}
                    <button onClick={() => removeFile(i)} style={{ position: "absolute", top: "-5px", right: "-5px", width: "16px", height: "16px", borderRadius: "50%", background: "#ef4444", border: "none", cursor: "pointer", color: "white", fontSize: "10px", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>×</button>
                  </div>
                ))}
              </div>
            )}

            {/* Input area */}
            <div style={{ borderTop: "1px solid #e2e8f0", padding: "10px 12px 8px", background: "white", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "6px 8px" }}>
                <input ref={fileInputRef} type="file" multiple accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.csv" style={{ display: "none" }} onChange={handleFileUpload} />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  title="Attach files or photos"
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", color: uploading ? "#06b6d4" : "#94a3b8", flexShrink: 0, display: "flex", borderRadius: "6px" }}
                >
                  {uploading
                    ? <Loader2 style={{ width: "16px", height: "16px", animation: "tc-spin 1s linear infinite" }} />
                    : <Paperclip style={{ width: "16px", height: "16px" }} />}
                </button>
                <input
                 value={input}
                 onChange={e => setInput(e.target.value)}
                 onKeyDown={e => e.key === "Enter" && !e.shiftKey && handleSend()}
                 placeholder="Ask me anything..."
                 style={{ flex: 1, background: "transparent", fontSize: "13.5px", border: "none", outline: "none", minWidth: 0, pointerEvents: "auto" }}
                />
                <button
                  onClick={handleSend}
                  disabled={sending || (!input.trim() && fileUrls.length === 0)}
                  style={{
                    background: (sending || (!input.trim() && fileUrls.length === 0)) ? "#e2e8f0" : "linear-gradient(135deg,#0ea5e9,#06b6d4)",
                    border: "none", borderRadius: "8px", padding: "7px 9px", cursor: "pointer", flexShrink: 0, display: "flex", transition: "background 0.15s"
                  }}
                >
                  {sending
                    ? <Loader2 style={{ width: "15px", height: "15px", color: "white", animation: "tc-spin 1s linear infinite" }} />
                    : <Send style={{ width: "15px", height: "15px", color: (sending || (!input.trim() && fileUrls.length === 0)) ? "#94a3b8" : "white" }} />}
                </button>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "6px", paddingLeft: "2px" }}>
                <AlertTriangle style={{ width: "10px", height: "10px", color: "#fbbf24", flexShrink: 0 }} />
                <p style={{ fontSize: "10px", color: "#94a3b8", margin: 0 }}>AI responses may be inaccurate. Always verify important information.</p>
              </div>
            </div>
          </div>
        )}

        {/* FAB */}
        <button
          className="tc-fab"
          onClick={() => isOpen ? setIsOpen(false) : handleOpen()}
          aria-label={isOpen ? "Close chat" : "Open AI Assistant"}
          style={{
            width: "54px", height: "54px", borderRadius: "50%",
            background: isOpen ? "#1e293b" : "linear-gradient(135deg,#0ea5e9,#06b6d4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 24px rgba(6,182,212,0.35)",
            cursor: "pointer", border: "none", outline: "none", transition: "background 0.2s",
          }}
        >
          {isOpen
            ? <ChevronDown style={{ width: "22px", height: "22px", color: "white" }} />
            : <MessageCircle style={{ width: "22px", height: "22px", color: "white" }} />}
        </button>
      </div>
    </>
  );
}
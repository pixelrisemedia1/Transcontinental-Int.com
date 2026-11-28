// Browser-local adapter for legacy page actions. It makes no network requests.
const storageKey = (name) => `tcl-local-${name}`;
const read = (name) => { try { return JSON.parse(localStorage.getItem(storageKey(name)) || "[]"); } catch { return []; } };
const write = (name, rows) => localStorage.setItem(storageKey(name), JSON.stringify(rows));
const entities = new Proxy({}, { get: (_target, name) => ({
 list: async () => read(name),
 filter: async (criteria = {}) => read(name).filter(row => Object.entries(criteria).every(([key, value]) => row[key] === value)),
 create: async (record) => { const row = { id: globalThis.crypto?.randomUUID?.() || String(Date.now()), created_date: new Date().toISOString(), ...record }; write(name, [...read(name), row]); return row; },
 update: async (id, changes) => { const rows = read(name).map(row => row.id === id ? { ...row, ...changes } : row); write(name, rows); return rows.find(row => row.id === id); },
 delete: async (id) => write(name, read(name).filter(row => row.id !== id)),
}) });
export const base44 = {
 entities,
 auth: { isAuthenticated: async () => false, me: async () => null, updateMe: async profile => localStorage.setItem("tcl-profile", JSON.stringify(profile)), logout: () => {}, redirectToLogin: () => {} },
 integrations: { Core: { UploadFile: async () => ({ file_url: "" }) } },
 agents: { createConversation: async () => ({ id: `local-${Date.now()}` }), subscribeToConversation: () => () => {}, addMessages: async () => ({ messages: [] }) },
};

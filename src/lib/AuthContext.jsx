import React, { createContext, useContext, useMemo, useState } from "react";
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
 const [user, setUser] = useState(() => { try { return JSON.parse(localStorage.getItem("tcl-profile") || "null"); } catch { return null; } });
 const value = useMemo(() => ({
  user, isAuthenticated: Boolean(user), isLoadingAuth: false, isLoadingPublicSettings: false, authError: null, appPublicSettings: null,
  logout: () => { localStorage.removeItem("tcl-profile"); setUser(null); },
  navigateToLogin: () => {}, checkAppState: async () => {},
  saveProfile: (next) => { const updated = { ...(user || {}), ...next }; localStorage.setItem("tcl-profile", JSON.stringify(updated)); setUser(updated); },
 }), [user]);
 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() { const context = useContext(AuthContext); if (!context) throw new Error("useAuth must be used within an AuthProvider"); return context; }

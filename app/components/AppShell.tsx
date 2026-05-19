"use client";
import Sidebar from "./Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F4F0" }}>
      <Sidebar />
      <main style={{ flex: 1, overflowY: "auto", minHeight: "100vh" }}>
        {children}
      </main>
    </div>
  );
}

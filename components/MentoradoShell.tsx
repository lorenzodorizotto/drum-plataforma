import MentoradoSidebar from "./MentoradoSidebar";

export default function MentoradoShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F4F0" }}>
      <MentoradoSidebar />
      <main style={{ flex: 1, overflowY: "auto", minHeight: "100vh" }}>
        {children}
      </main>
    </div>
  );
}

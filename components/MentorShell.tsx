import MentorSidebar from "./MentorSidebar";

export default function MentorShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F5F4F0" }}>
      <MentorSidebar />
      <main style={{ flex: 1, overflowY: "auto", minHeight: "100vh" }}>
        {children}
      </main>
    </div>
  );
}

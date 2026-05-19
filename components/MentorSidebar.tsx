"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, CalendarCheck, PackageCheck, ChevronLeft } from "lucide-react";

const nav = [
  { label: "Visão geral", href: "/mentor", icon: LayoutDashboard },
  { label: "Meus mentorados", href: "/mentor/mentorados", icon: Users },
  { label: "Encontros", href: "/mentor/encontros", icon: CalendarCheck },
  { label: "Entregáveis", href: "/mentor/entregaveis", icon: PackageCheck },
];

export default function MentorSidebar() {
  const pathname = usePathname();

  return (
    <aside style={{ width: 240, minWidth: 240, background: "#F5F4F0", borderRight: "1px solid #E0DDD8", display: "flex", flexDirection: "column", height: "100vh", position: "sticky", top: 0 }}>
      <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid #E0DDD8" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, background: "#4F46E5", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: 14 }}>D</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1A1A1A", letterSpacing: "-0.3px" }}>DRUM</div>
            <div style={{ fontSize: 11, color: "#4F46E5", marginTop: 1, fontWeight: 500 }}>Mentor</div>
          </div>
        </div>
      </div>

      <nav style={{ flex: 1, padding: "12px 8px", overflowY: "auto" }}>
        {nav.map(({ label, href, icon: Icon }) => {
          const active = href === "/mentor" ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 12px",
                borderRadius: 8,
                marginBottom: 2,
                fontSize: 14,
                fontWeight: active ? 600 : 400,
                color: active ? "#4F46E5" : "#444",
                background: active ? "#4F46E510" : "transparent",
                textDecoration: "none",
                transition: "background 0.12s, color 0.12s",
              }}
              onMouseEnter={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = "#EEEDE9"; (e.currentTarget as HTMLElement).style.color = "#1A1A1A"; } }}
              onMouseLeave={e => { if (!active) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#444"; } }}
            >
              <Icon size={16} strokeWidth={active ? 2.5 : 1.8} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: "12px 8px", borderTop: "1px solid #E0DDD8" }}>
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 8, fontSize: 13, color: "#999", textDecoration: "none", marginBottom: 8 }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#EEEDE9"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
        >
          <ChevronLeft size={14} />
          <span>Trocar perfil</span>
        </Link>
        <div style={{ padding: "10px 12px", background: "white", borderRadius: 10, border: "1px solid #E0DDD8", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 12, fontWeight: 600, flexShrink: 0 }}>CM</div>
          <div style={{ overflow: "hidden" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Carlos Mendes</div>
            <div style={{ fontSize: 11, color: "#999" }}>Mentor DRUM</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

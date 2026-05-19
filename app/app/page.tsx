"use client";
import Link from "next/link";
import { Settings, Target, Leaf } from "lucide-react";

function RoleCard({ href, label, description, color, icon: Icon, cta }: any) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{ background: "white", border: "2px solid #E0DDD8", borderRadius: 16, padding: "32px 28px", cursor: "pointer", transition: "all 0.15s", height: "100%" }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.borderColor = color;
          (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${color}22`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD8";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <div style={{ width: 48, height: 48, background: color + "18", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
          <Icon size={22} color={color} strokeWidth={1.8} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>{label}</div>
        <div style={{ fontSize: 13, color: "#666", lineHeight: 1.65, marginBottom: 24 }}>{description}</div>
        <div style={{ fontSize: 13, color, fontWeight: 600 }}>{cta} →</div>
      </div>
    </Link>
  );
}

export default function RoleSelectPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F5F4F0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 52 }}>
        <div style={{ width: 44, height: 44, background: "#D85A30", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "white", fontWeight: 800, fontSize: 20, letterSpacing: "-1px" }}>D</span>
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 22, color: "#1A1A1A", letterSpacing: "-0.5px" }}>DRUM</div>
          <div style={{ fontSize: 12, color: "#999", marginTop: 1 }}>Plataforma</div>
        </div>
      </div>

      <h1 style={{ fontSize: 26, fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px", textAlign: "center", letterSpacing: "-0.5px" }}>
        Bem-vindo à plataforma DRUM
      </h1>
      <p style={{ fontSize: 15, color: "#666", margin: "0 0 44px", textAlign: "center" }}>
        Escolha seu perfil de acesso para continuar
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, width: "100%", maxWidth: 840 }}>
        <RoleCard
          href="/dashboard"
          label="Administrador"
          description="Visão completa da plataforma: famílias, mentores, jornadas e relatórios."
          color="#D85A30"
          icon={Settings}
          cta="Entrar como Admin"
        />
        <RoleCard
          href="/mentor"
          label="Mentor"
          description="Gerencie seus mentorados, encontros, entregáveis e notas de sessão."
          color="#4F46E5"
          icon={Target}
          cta="Entrar como Mentor"
        />
        <RoleCard
          href="/mentorado"
          label="Mentorado"
          description="Acompanhe sua trilha, módulos, tarefas e encontros com seu mentor."
          color="#1D9E75"
          icon={Leaf}
          cta="Entrar como Mentorado"
        />
      </div>

      <p style={{ marginTop: 44, fontSize: 12, color: "#CCC" }}>Prototipo interativo · DRUM 2026</p>
    </div>
  );
}

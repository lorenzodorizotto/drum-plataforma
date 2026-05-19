"use client";
import { jornadas, encontros, tarefas } from "@/lib/mockData";
import Link from "next/link";
import { Users, CalendarCheck, PackageCheck, ArrowRight, Clock } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";

export default function MentorDashboardPage() {
  const meusJornadas = jornadas.filter(j => j.mentor === "Carlos Mendes");
  const proximosEncontros = encontros.filter(e => e.mentor === "Carlos Mendes" && e.status === "agendado");
  const tarefasPendentes = tarefas.filter(t => t.responsavel === "Carlos Mendes" && t.status !== "concluída");

  return (
    <div style={{ padding: "36px 40px", maxWidth: 1000 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: "#1A1A1A", margin: "0 0 4px", letterSpacing: "-0.5px" }}>Olá, Carlos</h1>
        <p style={{ fontSize: 14, color: "#666", margin: 0 }}>Segunda-feira, 18 de maio de 2026</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 32 }}>
        {[
          { label: "Mentorados ativos", value: meusJornadas.length, color: "#4F46E5", Icon: Users },
          { label: "Encontros esta semana", value: proximosEncontros.length, color: "#D85A30", Icon: CalendarCheck },
          { label: "Tarefas para revisar", value: tarefasPendentes.length, color: "#D97706", Icon: PackageCheck },
        ].map(({ label, value, color, Icon }) => (
          <div key={label} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16 }}>
            <div style={{ width: 40, height: 40, background: color + "18", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon size={18} color={color} />
            </div>
            <div>
              <div style={{ fontSize: 26, fontWeight: 700, color: "#1A1A1A", lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>{label}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "#1A1A1A", margin: 0 }}>Meus mentorados</h2>
            <Link href="/mentor/mentorados" style={{ fontSize: 13, color: "#4F46E5", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
              Ver todos <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {meusJornadas.map(j => (
              <Link key={j.id} href={`/mentor/mentorados/${j.id}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px", cursor: "pointer", transition: "border-color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#4F46E5"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD8"}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A", marginBottom: 2 }}>{j.cliente}</div>
                      <div style={{ fontSize: 12, color: "#666" }}>{j.moduloAtual}</div>
                    </div>
                    <div style={{ fontSize: 12, color: "#4F46E5", fontWeight: 600, background: "#4F46E510", padding: "2px 10px", borderRadius: 20 }}>
                      {j.progresso}%
                    </div>
                  </div>
                  <ProgressBar value={j.progresso} color="#4F46E5" />
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10 }}>
                    <Clock size={12} color="#999" />
                    <span style={{ fontSize: 12, color: "#999" }}>{j.proximoMarco}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px", alignSelf: "start" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", margin: 0 }}>Próximos encontros</h2>
            <Link href="/mentor/encontros" style={{ fontSize: 12, color: "#4F46E5", textDecoration: "none" }}>Ver todos</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {proximosEncontros.map(e => (
              <div key={e.id} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ background: "#F0F0FE", borderRadius: 8, padding: "6px 10px", textAlign: "center", minWidth: 44, flexShrink: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#4F46E5", lineHeight: 1 }}>{e.data.split("-")[2]}</div>
                  <div style={{ fontSize: 10, color: "#4F46E5", textTransform: "uppercase" }}>
                    {new Date(e.data).toLocaleDateString("pt-BR", { month: "short" })}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{e.participante}</div>
                  <div style={{ fontSize: 12, color: "#666", marginTop: 1 }}>{e.hora} · {e.duracao}</div>
                  <div style={{ fontSize: 11, color: "#999", marginTop: 1 }}>{e.modulo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

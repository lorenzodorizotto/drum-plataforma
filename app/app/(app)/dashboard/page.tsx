"use client";
import { metricas, jornadas, tarefas, encontros } from "@/lib/mockData";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import {
  AlertTriangle, CalendarCheck, PackageCheck, TrendingUp,
  Users, Route, Clock, ArrowRight, Plus
} from "lucide-react";

function MetricCard({ label, value, sub, color = "#D85A30", icon: Icon }: any) {
  return (
    <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16 }}>
      <div style={{ width: 40, height: 40, background: color + "18", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon size={18} color={color} />
      </div>
      <div>
        <div style={{ fontSize: 26, fontWeight: 700, color: "#1A1A1A", lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>{label}</div>
        {sub && <div style={{ fontSize: 11, color: "#999", marginTop: 2 }}>{sub}</div>}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const proximosEncontros = encontros.filter(e => e.status === "agendado").slice(0, 3);
  const tarefasAbertas = tarefas.filter(t => t.status !== "concluída").slice(0, 4);
  const jornadasAtivas = jornadas.slice(0, 3);

  return (
    <div style={{ padding: "36px 40px", maxWidth: 1100 }}>
      <PageHeader
        title="Dashboard"
        description="Segunda-feira, 18 de maio de 2026"
        action={
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={15} /> Nova jornada
          </button>
        }
      />

      {/* Métricas */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 32 }}>
        <MetricCard label="Jornadas ativas" value={metricas.jornadasAtivas} icon={Route} color="#D85A30" />
        <MetricCard label="Encontros esta semana" value={metricas.encontrosSemana} icon={CalendarCheck} color="#4F46E5" />
        <MetricCard label="Entregáveis pendentes" value={metricas.entregaveisPendentes} icon={PackageCheck} color="#D97706" />
        <MetricCard label="Tarefas atrasadas" value={metricas.tarefasAtrasadas} sub="Ação necessária" icon={AlertTriangle} color="#DC2626" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 20 }}>
        {/* Jornadas ativas */}
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "#1A1A1A", margin: 0 }}>Jornadas ativas</h2>
            <Link href="/jornadas" style={{ fontSize: 13, color: "#D85A30", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
              Ver todas <ArrowRight size={13} />
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {jornadasAtivas.map(j => (
              <Link key={j.id} href={`/jornadas/${j.id}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px", cursor: "pointer", transition: "border-color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#D85A30"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD8"}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A", marginBottom: 2 }}>{j.nome}</div>
                      <div style={{ fontSize: 12, color: "#666" }}>{j.moduloAtual}</div>
                    </div>
                    <StatusBadge status={j.status} />
                  </div>
                  <ProgressBar value={j.progresso} />
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10 }}>
                    <Clock size={12} color="#999" />
                    <span style={{ fontSize: 12, color: "#999" }}>{j.proximoMarco}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Coluna direita */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Próximos encontros */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", margin: 0 }}>Próximos encontros</h2>
              <Link href="/encontros" style={{ fontSize: 12, color: "#D85A30", textDecoration: "none" }}>Ver todos</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {proximosEncontros.map(e => (
                <div key={e.id} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ background: "#FDF5F3", borderRadius: 8, padding: "6px 10px", textAlign: "center", minWidth: 44, flexShrink: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#D85A30", lineHeight: 1 }}>{e.data.split("-")[2]}</div>
                    <div style={{ fontSize: 10, color: "#D85A30", textTransform: "uppercase" }}>
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

          {/* Tarefas pendentes */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", margin: 0 }}>Tarefas pendentes</h2>
              <Link href="/tarefas" style={{ fontSize: 12, color: "#D85A30", textDecoration: "none" }}>Ver todas</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {tarefasAbertas.map(t => (
                <div key={t.id} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 16, height: 16, borderRadius: 4, border: "1.5px solid #E0DDD8", flexShrink: 0 }} />
                  <div style={{ flex: 1, overflow: "hidden" }}>
                    <div style={{ fontSize: 13, color: "#1A1A1A", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.titulo}</div>
                    <div style={{ fontSize: 11, color: "#999" }}>{t.responsavel} · {new Date(t.prazo).toLocaleDateString("pt-BR")}</div>
                  </div>
                  <div style={{ width: 6, height: 6, borderRadius: 99, background: t.prioridade === "alta" ? "#DC2626" : t.prioridade === "média" ? "#D97706" : "#1D9E75", flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

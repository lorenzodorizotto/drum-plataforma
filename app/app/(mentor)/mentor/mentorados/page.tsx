"use client";
import { jornadas, encontros } from "@/lib/mockData";
import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";
import StatusBadge from "@/components/StatusBadge";
import { CalendarCheck, ChevronRight } from "lucide-react";

export default function MentorMentoradosPage() {
  const meusJornadas = jornadas.filter(j => j.mentor === "Carlos Mendes");

  return (
    <div style={{ padding: "36px 40px", maxWidth: 900 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: "0 0 4px" }}>Meus mentorados</h1>
        <p style={{ fontSize: 14, color: "#666", margin: 0 }}>{meusJornadas.length} jornadas ativas</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {meusJornadas.map(j => {
          const concluidos = j.modulos.filter(m => m.status === "concluído").length;
          const proximoEncontro = encontros.find(
            e => e.status === "agendado" && (e.participante.includes(j.cliente.split(" ")[0]) || e.participante.includes(j.cliente.split(" ")[1] ?? ""))
          );

          return (
            <Link key={j.id} href={`/mentor/mentorados/${j.id}`} style={{ textDecoration: "none" }}>
              <div
                style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "22px 24px", cursor: "pointer", transition: "border-color 0.15s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#4F46E5"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD8"}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#4F46E518", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#4F46E5" }}>
                        {j.cliente.replace("Família ", "").split(" ").slice(0, 2).map((n: string) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A" }}>{j.cliente}</div>
                      <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>{j.programa}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <StatusBadge status={j.status} />
                    <ChevronRight size={16} color="#CCC" />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#999", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>Módulo atual</div>
                    <div style={{ fontSize: 13, color: "#1A1A1A", fontWeight: 500, marginBottom: 10 }}>{j.moduloAtual}</div>
                    <ProgressBar value={j.progresso} color="#4F46E5" />
                    <div style={{ fontSize: 11, color: "#999", marginTop: 6 }}>{concluidos} de {j.modulos.length} módulos concluídos</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "#999", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>Próximo encontro</div>
                    {proximoEncontro ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#F5F4F0", borderRadius: 8, padding: "8px 10px" }}>
                        <CalendarCheck size={14} color="#4F46E5" />
                        <div>
                          <div style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A" }}>
                            {new Date(proximoEncontro.data).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}
                          </div>
                          <div style={{ fontSize: 11, color: "#666" }}>{proximoEncontro.hora} · {proximoEncontro.duracao}</div>
                        </div>
                      </div>
                    ) : (
                      <div style={{ fontSize: 12, color: "#999" }}>Nenhum agendado</div>
                    )}
                    <div style={{ fontSize: 11, color: "#999", marginTop: 8 }}>{j.proximoMarco}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

"use client";
import { jornadas } from "@/lib/mockData";
import ProgressBar from "@/components/ProgressBar";
import { CheckCircle2, Circle, Lock, Loader2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const moduloIcon: Record<string, any> = {
  concluído: CheckCircle2,
  em_andamento: Loader2,
  bloqueado: Lock,
  liberado: Circle,
};
const moduloColor: Record<string, string> = {
  concluído: "#1D9E75",
  em_andamento: "#1D9E75",
  bloqueado: "#CCC",
  liberado: "#666",
};

export default function MentoradoTrilhaPage() {
  const jornada = jornadas.find(j => j.id === "j1")!;
  const [expandido, setExpandido] = useState<number | null>(3);

  return (
    <div style={{ padding: "36px 40px", maxWidth: 760 }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: "0 0 4px" }}>Minha trilha</h1>
        <p style={{ fontSize: 14, color: "#666", margin: "0 0 16px" }}>{jornada.nome}</p>
        <ProgressBar value={jornada.progresso} color="#1D9E75" />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 12, color: "#999" }}>
          <span>{jornada.modulos.filter(m => m.status === "concluído").length} concluídos</span>
          <span>{jornada.modulos.length} módulos</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {jornada.modulos.map(m => {
          const Icon = moduloIcon[m.status] ?? Circle;
          const color = moduloColor[m.status] ?? "#999";
          const isActive = m.status === "em_andamento";
          const isDone = m.status === "concluído";
          const isLocked = m.status === "bloqueado";
          const isOpen = expandido === m.ordem;

          return (
            <div
              key={m.ordem}
              style={{
                background: isLocked ? "#F5F4F0" : "white",
                border: `1px solid ${isActive ? "#1D9E75" : "#E0DDD8"}`,
                borderRadius: 12,
                overflow: "hidden",
                opacity: isLocked ? 0.55 : 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "16px 20px",
                  cursor: isLocked ? "default" : "pointer",
                }}
                onClick={() => !isLocked && setExpandido(isOpen ? null : m.ordem)}
              >
                <Icon size={18} color={color} strokeWidth={2} style={{ flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: isLocked ? "#BBB" : "#1A1A1A" }}>
                      {m.ordem.toString().padStart(2, "0")} · {m.nome}
                    </span>
                    {isActive && (
                      <span style={{ fontSize: 11, color: "#1D9E75", background: "#1D9E7512", padding: "2px 8px", borderRadius: 20, fontWeight: 600 }}>
                        Em andamento
                      </span>
                    )}
                    {isDone && (
                      <span style={{ fontSize: 11, color: "#1D9E75", fontWeight: 500 }}>Concluído</span>
                    )}
                  </div>
                  {!isOpen && (
                    <div style={{ fontSize: 12, color: isLocked ? "#CCC" : "#999", marginTop: 2 }}>
                      Entregável: {m.entregavel}
                    </div>
                  )}
                </div>
                {!isLocked && (
                  isOpen
                    ? <ChevronUp size={16} color="#999" style={{ flexShrink: 0 }} />
                    : <ChevronDown size={16} color="#999" style={{ flexShrink: 0 }} />
                )}
              </div>

              {isOpen && (
                <div style={{ padding: "0 20px 20px", borderTop: "1px solid #F0EFEB" }}>
                  <div style={{ paddingTop: 16 }}>
                    {isActive && (
                      <div style={{ background: "#F0FFF8", borderRadius: 10, padding: "16px 18px" }}>
                        <div style={{ fontSize: 11, color: "#1D9E75", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
                          Entregável deste módulo
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A", marginBottom: 14 }}>{m.entregavel}</div>
                        <Link href="/mentorado/entregaveis" style={{ textDecoration: "none" }}>
                          <button className="btn-primary" style={{ fontSize: 12, background: "#1D9E75" }}>
                            Ir para entregável →
                          </button>
                        </Link>
                      </div>
                    )}
                    {isDone && (
                      <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#F0FFF8", borderRadius: 10, padding: "14px 16px" }}>
                        <CheckCircle2 size={16} color="#1D9E75" strokeWidth={2.5} />
                        <div>
                          <div style={{ fontSize: 13, color: "#1D9E75", fontWeight: 600 }}>Entregável concluído</div>
                          <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>{m.entregavel}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

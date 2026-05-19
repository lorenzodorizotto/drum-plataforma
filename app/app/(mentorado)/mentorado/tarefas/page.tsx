"use client";
import { tarefas } from "@/lib/mockData";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const prioridadeColor: Record<string, string> = {
  alta: "#DC2626",
  média: "#D97706",
  baixa: "#1D9E75",
};

export default function MentoradoTarefasPage() {
  const minhasTarefas = tarefas.filter(t => t.responsavel === "Ana Rodrigues");
  const [concluidas, setConcluidas] = useState<string[]>(
    minhasTarefas.filter(t => t.status === "concluída").map(t => t.id)
  );

  const toggle = (id: string) => {
    setConcluidas(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const abertas = minhasTarefas.filter(t => !concluidas.includes(t.id));
  const feitas = minhasTarefas.filter(t => concluidas.includes(t.id));

  return (
    <div style={{ padding: "36px 40px", maxWidth: 680 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: "0 0 4px" }}>Próximos passos</h1>
        <p style={{ fontSize: 14, color: "#666", margin: 0 }}>
          {abertas.length} {abertas.length === 1 ? "tarefa aberta" : "tarefas abertas"}
        </p>
      </div>

      {/* Abertas */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: abertas.length > 0 ? 28 : 0 }}>
        {abertas.map(t => (
          <div
            key={t.id}
            style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "16px 18px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer", transition: "border-color 0.12s" }}
            onClick={() => toggle(t.id)}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#1D9E75"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD8"}
          >
            <div style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${prioridadeColor[t.prioridade] ?? "#E0DDD8"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, color: "#1A1A1A", fontWeight: 500 }}>{t.titulo}</div>
              <div style={{ fontSize: 12, color: "#999", marginTop: 3 }}>
                {t.vinculo} · Prazo: {new Date(t.prazo).toLocaleDateString("pt-BR")}
              </div>
            </div>
            <div style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 8px",
              borderRadius: 20,
              background: (prioridadeColor[t.prioridade] ?? "#666") + "12",
              color: prioridadeColor[t.prioridade] ?? "#666",
            }}>
              {t.prioridade}
            </div>
          </div>
        ))}
      </div>

      {abertas.length === 0 && feitas.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 0", color: "#999", fontSize: 14 }}>
          Nenhuma tarefa atribuída.
        </div>
      )}

      {abertas.length === 0 && feitas.length > 0 && (
        <div style={{ background: "#F0FFF8", borderRadius: 12, padding: "20px 24px", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
          <CheckCircle2 size={20} color="#1D9E75" />
          <span style={{ fontSize: 14, color: "#1D9E75", fontWeight: 600 }}>Tudo concluído! Parabéns.</span>
        </div>
      )}

      {/* Concluídas */}
      {feitas.length > 0 && (
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Concluídos</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {feitas.map(t => (
              <div
                key={t.id}
                style={{ background: "#F5F4F0", border: "1px solid #E0DDD8", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
                onClick={() => toggle(t.id)}
              >
                <CheckCircle2 size={20} color="#1D9E75" strokeWidth={2} style={{ flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, color: "#999", textDecoration: "line-through" }}>{t.titulo}</div>
                  <div style={{ fontSize: 12, color: "#CCC", marginTop: 2 }}>{t.vinculo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

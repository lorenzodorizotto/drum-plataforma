"use client";
import { encontros } from "@/lib/mockData";
import StatusBadge from "@/components/StatusBadge";
import { Plus, FileText } from "lucide-react";
import { useState } from "react";

export default function MentorEncontrosPage() {
  const meusEncontros = encontros.filter(e => e.mentor === "Carlos Mendes");
  const agendados = meusEncontros.filter(e => e.status === "agendado");
  const registrados = meusEncontros.filter(e => e.status === "registrado");
  const [notaAberta, setNotaAberta] = useState<string | null>(null);
  const [notas, setNotas] = useState<Record<string, { privada: string; compartilhada: string }>>({});

  const updateNota = (id: string, tipo: "privada" | "compartilhada", valor: string) => {
    setNotas(prev => ({ ...prev, [id]: { ...prev[id], privada: "", compartilhada: "", [tipo]: valor } }));
  };

  return (
    <div style={{ padding: "36px 40px", maxWidth: 900 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: "0 0 4px" }}>Encontros</h1>
          <p style={{ fontSize: 14, color: "#666", margin: 0 }}>{agendados.length} agendados · {registrados.length} realizados</p>
        </div>
        <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
          <Plus size={14} /> Registrar encontro
        </button>
      </div>

      {/* Agendados */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Próximos</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {agendados.map(e => (
            <div key={e.id} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ background: "#F0F0FE", borderRadius: 10, padding: "8px 12px", textAlign: "center", minWidth: 50, flexShrink: 0 }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#4F46E5", lineHeight: 1 }}>{e.data.split("-")[2]}</div>
                    <div style={{ fontSize: 10, color: "#4F46E5", textTransform: "uppercase" }}>
                      {new Date(e.data).toLocaleDateString("pt-BR", { month: "short" })}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", marginBottom: 3 }}>{e.participante}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>{e.hora} · {e.duracao} · {e.modulo}</div>
                    <div style={{ fontSize: 12, color: "#999", marginTop: 6, maxWidth: 520, lineHeight: 1.4 }}>{e.objetivo}</div>
                  </div>
                </div>
                <StatusBadge status={e.status} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Realizados */}
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Realizados</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {registrados.map(e => (
            <div key={e.id} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "18px 20px", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ background: "#F5F4F0", borderRadius: 10, padding: "8px 12px", textAlign: "center", minWidth: 50, flexShrink: 0 }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "#666", lineHeight: 1 }}>{e.data.split("-")[2]}</div>
                    <div style={{ fontSize: 10, color: "#999", textTransform: "uppercase" }}>
                      {new Date(e.data).toLocaleDateString("pt-BR", { month: "short" })}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", marginBottom: 3 }}>{e.participante}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>{e.hora} · {e.duracao} · {e.modulo}</div>
                    <div style={{ fontSize: 12, color: "#999", marginTop: 6, maxWidth: 520, lineHeight: 1.4 }}>{e.objetivo}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
                  <StatusBadge status={e.status} />
                  <button
                    className="btn-secondary"
                    style={{ fontSize: 12, padding: "4px 10px", display: "flex", alignItems: "center", gap: 5 }}
                    onClick={() => setNotaAberta(notaAberta === e.id ? null : e.id)}
                  >
                    <FileText size={12} /> Notas
                  </button>
                </div>
              </div>

              {notaAberta === e.id && (
                <div style={{ padding: "16px 20px", borderTop: "1px solid #F0EFEB", background: "#FAFAF8" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: 99, background: "#4F46E5" }} />
                        <label style={{ fontSize: 12, fontWeight: 600, color: "#666" }}>Nota privada</label>
                      </div>
                      <textarea
                        value={notas[e.id]?.privada ?? ""}
                        onChange={ev => updateNota(e.id, "privada", ev.target.value)}
                        placeholder="Observações internas..."
                        style={{ width: "100%", height: 90, padding: "8px 10px", border: "1px solid #E0DDD8", borderRadius: 8, fontSize: 12, fontFamily: "inherit", resize: "none", outline: "none", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: 99, background: "#1D9E75" }} />
                        <label style={{ fontSize: 12, fontWeight: 600, color: "#666" }}>Nota compartilhada</label>
                      </div>
                      <textarea
                        value={notas[e.id]?.compartilhada ?? ""}
                        onChange={ev => updateNota(e.id, "compartilhada", ev.target.value)}
                        placeholder="Resumo para o mentorado..."
                        style={{ width: "100%", height: 90, padding: "8px 10px", border: "1px solid #E0DDD8", borderRadius: 8, fontSize: 12, fontFamily: "inherit", resize: "none", outline: "none", boxSizing: "border-box" }}
                      />
                    </div>
                  </div>
                  <button className="btn-primary" style={{ marginTop: 12, fontSize: 12 }}>Salvar notas</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

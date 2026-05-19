"use client";
import { jornadas } from "@/lib/mockData";
import { CheckCircle2, Clock, Upload } from "lucide-react";
import { useState } from "react";

export default function MentoradoEntregaveisPage() {
  const jornada = jornadas.find(j => j.id === "j1")!;
  const concluidos = jornada.modulos.filter(m => m.status === "concluído");
  const moduloAtual = jornada.modulos.find(m => m.status === "em_andamento")!;
  const [texto, setTexto] = useState("");
  const [salvo, setSalvo] = useState(false);

  const handleEnviar = () => {
    setSalvo(true);
    setTimeout(() => setSalvo(false), 2000);
  };

  return (
    <div style={{ padding: "36px 40px", maxWidth: 760 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: "0 0 4px" }}>Entregáveis</h1>
        <p style={{ fontSize: 14, color: "#666", margin: 0 }}>Seus entregáveis por módulo</p>
      </div>

      {/* Entregável atual */}
      <div style={{ background: "white", border: "1px solid #1D9E75", borderRadius: 16, padding: "26px 28px", marginBottom: 28, borderLeft: "4px solid #1D9E75" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <Clock size={14} color="#1D9E75" />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#1D9E75", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Em andamento · {moduloAtual.nome}
          </span>
        </div>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A", margin: "0 0 10px" }}>{moduloAtual.entregavel}</h2>
        <p style={{ fontSize: 13, color: "#555", margin: "0 0 20px", lineHeight: 1.65 }}>
          Reflita sobre os caminhos possíveis para sua carreira e liste as prioridades que vão guiar suas escolhas de longo prazo.
          Seja específico e honesto com o que você realmente quer.
        </p>
        <textarea
          value={texto}
          onChange={e => setTexto(e.target.value)}
          placeholder="Escreva suas prioridades de longo prazo aqui..."
          style={{
            width: "100%",
            minHeight: 140,
            padding: "12px 14px",
            border: "1px solid #E0DDD8",
            borderRadius: 10,
            fontSize: 14,
            color: "#1A1A1A",
            background: "#FAFAF8",
            resize: "vertical",
            fontFamily: "inherit",
            outline: "none",
            lineHeight: 1.6,
            boxSizing: "border-box",
          }}
        />
        <div style={{ display: "flex", gap: 10, marginTop: 14, alignItems: "center" }}>
          <button
            className="btn-primary"
            style={{ fontSize: 13, background: "#1D9E75", display: "flex", alignItems: "center", gap: 6 }}
            onClick={handleEnviar}
          >
            <Upload size={13} /> Enviar para mentor
          </button>
          <button className="btn-secondary" style={{ fontSize: 13 }}>Salvar rascunho</button>
          {salvo && <span style={{ fontSize: 12, color: "#1D9E75", fontWeight: 500 }}>Enviado!</span>}
        </div>
      </div>

      {/* Concluídos */}
      {concluidos.length > 0 && (
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
            Concluídos
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {concluidos.map(m => (
              <div key={m.ordem} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                <CheckCircle2 size={18} color="#1D9E75" strokeWidth={2} style={{ flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{m.entregavel}</div>
                  <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                    Módulo {m.ordem.toString().padStart(2, "0")} · {m.nome}
                  </div>
                </div>
                <button className="btn-secondary" style={{ fontSize: 12, padding: "4px 10px" }}>Ver</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

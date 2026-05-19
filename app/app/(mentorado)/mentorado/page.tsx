import { jornadas, encontros } from "@/lib/mockData";
import ProgressBar from "@/components/ProgressBar";
import { CalendarCheck, CheckCircle2, Clock } from "lucide-react";

export default function MentoradoHomePage() {
  const jornada = jornadas.find(j => j.id === "j1")!;
  const moduloAtual = jornada.modulos.find(m => m.status === "em_andamento")!;
  const proximoEncontro = encontros.find(e => e.id === "e1")!;

  return (
    <div style={{ padding: "36px 40px", maxWidth: 860 }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: "#1A1A1A", margin: "0 0 4px", letterSpacing: "-0.5px" }}>Olá, Ana</h1>
        <p style={{ fontSize: 14, color: "#666", margin: 0 }}>Segunda-feira, 18 de maio de 2026 · Família Rodrigues</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 290px", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Módulo atual */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 16, padding: "26px 28px", borderLeft: "4px solid #1D9E75" }}>
            <div style={{ fontSize: 11, color: "#1D9E75", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>Seu módulo atual</div>
            <h2 style={{ fontSize: 21, fontWeight: 700, color: "#1A1A1A", margin: "0 0 10px", letterSpacing: "-0.3px" }}>
              {moduloAtual.ordem.toString().padStart(2, "0")} · {moduloAtual.nome}
            </h2>
            <p style={{ fontSize: 14, color: "#555", margin: "0 0 20px", lineHeight: 1.65 }}>
              Neste módulo você vai explorar os caminhos possíveis para seu futuro e definir o que realmente importa no longo prazo.
            </p>
            <div style={{ background: "#F5F4F0", borderRadius: 10, padding: "14px 16px", marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: "#999", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.04em" }}>Entregável</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{moduloAtual.entregavel}</div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn-primary" style={{ fontSize: 13, background: "#1D9E75" }}>Acessar módulo</button>
              <button className="btn-secondary" style={{ fontSize: 13 }}>Ver entregável</button>
            </div>
          </div>

          {/* Progresso */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px" }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", margin: "0 0 14px" }}>Sua trilha</h3>
            <ProgressBar value={jornada.progresso} color="#1D9E75" />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 12, color: "#666" }}>
              <span>{jornada.modulos.filter(m => m.status === "concluído").length} módulos concluídos</span>
              <span>{jornada.modulos.length} no total</span>
            </div>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              {jornada.modulos.slice(0, 5).map(m => (
                <div key={m.ordem} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {m.status === "concluído" ? (
                    <CheckCircle2 size={14} color="#1D9E75" strokeWidth={2.5} />
                  ) : m.status === "em_andamento" ? (
                    <div style={{ width: 14, height: 14, borderRadius: "50%", border: "2px solid #1D9E75", flexShrink: 0 }} />
                  ) : (
                    <div style={{ width: 14, height: 14, borderRadius: "50%", border: "1.5px solid #DDD", flexShrink: 0 }} />
                  )}
                  <span style={{ fontSize: 13, color: m.status === "bloqueado" ? "#CCC" : m.status === "em_andamento" ? "#1D9E75" : "#555", fontWeight: m.status === "em_andamento" ? 600 : 400 }}>
                    {m.nome}
                  </span>
                  {m.status === "em_andamento" && (
                    <span style={{ fontSize: 11, color: "#1D9E75", background: "#1D9E7512", padding: "2px 8px", borderRadius: 20, fontWeight: 600 }}>agora</span>
                  )}
                </div>
              ))}
              {jornada.modulos.length > 5 && (
                <div style={{ fontSize: 12, color: "#999", paddingLeft: 24 }}>+ {jornada.modulos.length - 5} módulos restantes</div>
              )}
            </div>
          </div>
        </div>

        {/* Lateral */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Próxima sessão */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px" }}>
            <div style={{ fontSize: 11, color: "#999", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>Próxima sessão</div>
            <div style={{ background: "#F0FFF8", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <CalendarCheck size={16} color="#1D9E75" />
                <span style={{ fontSize: 14, fontWeight: 700, color: "#1D9E75" }}>
                  {new Date(proximoEncontro.data).toLocaleDateString("pt-BR", { day: "2-digit", month: "long" })}
                </span>
              </div>
              <div style={{ fontSize: 13, color: "#444" }}>{proximoEncontro.hora} · {proximoEncontro.duracao}</div>
              <div style={{ fontSize: 12, color: "#555", marginTop: 6, lineHeight: 1.4 }}>{proximoEncontro.objetivo}</div>
            </div>
          </div>

          {/* Mentor */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px" }}>
            <div style={{ fontSize: 11, color: "#999", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>Seu mentor</div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#1D9E7518", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#1D9E75" }}>CM</span>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A1A" }}>Carlos Mendes</div>
                <div style={{ fontSize: 12, color: "#666", marginTop: 1 }}>Mentor DRUM</div>
              </div>
            </div>
            <button className="btn-secondary" style={{ width: "100%", fontSize: 13 }}>Enviar mensagem</button>
          </div>

          {/* Próximo marco */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px" }}>
            <div style={{ fontSize: 11, color: "#999", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>Próximo marco</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#FDF5F3", borderRadius: 8, padding: "10px 12px" }}>
              <Clock size={14} color="#D85A30" />
              <span style={{ fontSize: 13, color: "#D85A30", fontWeight: 500 }}>{jornada.proximoMarco}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

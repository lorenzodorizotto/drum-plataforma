import { diagnosticos, familias } from "@/lib/mockData";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import DrumRadarChart from "@/components/RadarChart";
import { Plus, Stethoscope } from "lucide-react";

const radarRodrigues = [
  { eixo: "Next Generation", atual: 2, alvo: 4 },
  { eixo: "Empreendedorismo", atual: 3, alvo: 4 },
  { eixo: "Governança", atual: 2, alvo: 3 },
  { eixo: "Geração Atual", atual: 2, alvo: 3 },
];

export default function DiagnosticosPage() {
  return (
    <div style={{ padding: "36px 40px", maxWidth: 1100 }}>
      <PageHeader
        title="Diagnósticos"
        description="Assessments, frameworks e devolutivas"
        action={
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={15} /> Novo diagnóstico
          </button>
        }
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 20 }}>
        {/* Lista */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {diagnosticos.map(d => (
            <div key={d.id} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, background: "#FDF5F3", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Stethoscope size={16} color="#D85A30" />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{d.nome}</div>
                    <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>{d.participante}</div>
                  </div>
                </div>
                <StatusBadge status={d.status} />
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "#999" }}>
                  {new Date(d.data).toLocaleDateString("pt-BR")}
                </span>
                <button className="btn-secondary" style={{ fontSize: 12, padding: "5px 12px" }}>Ver devolutiva</button>
                <button className="btn-primary" style={{ fontSize: 12, padding: "5px 12px" }}>Aplicar novamente</button>
              </div>
            </div>
          ))}

          {/* Templates disponíveis */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px", marginTop: 8 }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 14px" }}>Templates disponíveis</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { nome: "Termômetro de Carreira", desc: "Momento, clareza, energia, prontidão" },
                { nome: "Life Design", desc: "North Star, Ambiente, Alavancas" },
                { nome: "Empreendedorismo", desc: "Problema, Time, Próximo Passo, Visão" },
                { nome: "Framework de Transição", desc: "4 eixos de sucessão familiar" },
                { nome: "Prontidão do Sucessor", desc: "Clareza, repertório, interesse" },
                { nome: "Prontidão do Sucedido", desc: "Visão, abertura, alinhamento" },
              ].map(t => (
                <div key={t.nome} style={{ background: "#F5F4F0", borderRadius: 8, padding: "12px 14px", cursor: "pointer" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 3 }}>{t.nome}</div>
                  <div style={{ fontSize: 11, color: "#999" }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Radar Família Rodrigues */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px" }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 4px" }}>Radar – Família Rodrigues</h3>
            <p style={{ fontSize: 12, color: "#999", margin: "0 0 16px" }}>Framework de Transição · Mar/2026</p>
            <DrumRadarChart data={radarRodrigues} />
            <div style={{ marginTop: 16, background: "#FDF5F3", borderRadius: 8, padding: "12px 14px" }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#D85A30", marginBottom: 4 }}>Leitura do descompasso</div>
              <p style={{ fontSize: 12, color: "#666", margin: 0, lineHeight: 1.6 }}>
                Empreendedorismo está mais avançado que a governança, o que é comum em famílias em crescimento. A próxima geração precisa de clareza de direção antes de assumir responsabilidades formais.
              </p>
            </div>
          </div>

          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px" }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 12px" }}>Níveis por eixo</h3>
            {radarRodrigues.map(d => (
              <div key={d.eixo} style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontSize: 13, color: "#1A1A1A" }}>{d.eixo}</span>
                  <span style={{ fontSize: 12, color: "#666" }}>{d.atual} → {d.alvo}</span>
                </div>
                <div style={{ height: 6, background: "#E0DDD8", borderRadius: 99 }}>
                  <div style={{ width: `${(d.atual / 4) * 100}%`, height: "100%", background: "#D85A30", borderRadius: 99 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

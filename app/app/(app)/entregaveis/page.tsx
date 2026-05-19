import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { Plus, PackageCheck } from "lucide-react";

const entregaveis = [
  { id: "e1", titulo: "Dilema em 140 caracteres", pessoa: "Ana Rodrigues", jornada: "Trilha de Desenvolvimento", modulo: "Módulo 01", status: "aprovado", prazo: "2026-05-10" },
  { id: "e2", titulo: "3 princípios da família + 3 escolhidos", pessoa: "Ana Rodrigues", jornada: "Trilha de Desenvolvimento", modulo: "Módulo 02", status: "aprovado", prazo: "2026-05-24" },
  { id: "e3", titulo: "Prioridades de longo prazo", pessoa: "Ana Rodrigues", jornada: "Trilha de Desenvolvimento", modulo: "Módulo 03", status: "em_andamento", prazo: "2026-06-12" },
  { id: "e4", titulo: "Mapa do ciclo empreendedor", pessoa: "Roberto Rodrigues", jornada: "Trilha de Transição", modulo: "Módulo 01", status: "aprovado", prazo: "2026-05-15" },
  { id: "e5", titulo: "Documento de visão da sucessão", pessoa: "Roberto Rodrigues", jornada: "Trilha de Transição", modulo: "Módulo 02", status: "enviado", prazo: "2026-06-08" },
  { id: "e6", titulo: "Ponto B em uma frase", pessoa: "Rafael Mendonça", jornada: "Programa Carreira", modulo: "Módulo 04", status: "em_andamento", prazo: "2026-06-20" },
];

export default function EntregaveisPage() {
  return (
    <div style={{ padding: "36px 40px", maxWidth: 1000 }}>
      <PageHeader
        title="Entregáveis"
        description="Trabalhos, reflexões e documentos produzidos por mentorados"
        action={
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={15} /> Novo entregável
          </button>
        }
      />

      {/* Filtros por status */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {["Todos", "Em andamento", "Enviado", "Em revisão", "Aprovado", "Precisa ajuste"].map(f => (
          <button key={f} style={{ padding: "6px 14px", borderRadius: 20, border: "1px solid #E0DDD8", background: f === "Todos" ? "#1A1A1A" : "white", color: f === "Todos" ? "white" : "#666", fontSize: 12, cursor: "pointer" }}>
            {f}
          </button>
        ))}
      </div>

      <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #E0DDD8" }}>
              {["Entregável", "Pessoa", "Jornada / Módulo", "Prazo", "Status", ""].map(h => (
                <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: "0.03em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entregaveis.map((e, i) => (
              <tr key={e.id} style={{ borderBottom: i < entregaveis.length - 1 ? "1px solid #F0EFEB" : "none" }}>
                <td style={{ padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <PackageCheck size={15} color="#D85A30" />
                    <span style={{ fontSize: 14, fontWeight: 500, color: "#1A1A1A" }}>{e.titulo}</span>
                  </div>
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <span style={{ fontSize: 13, color: "#666" }}>{e.pessoa}</span>
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <div style={{ fontSize: 13, color: "#666" }}>{e.jornada}</div>
                  <div style={{ fontSize: 11, color: "#999" }}>{e.modulo}</div>
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <span style={{ fontSize: 13, color: "#999" }}>{new Date(e.prazo).toLocaleDateString("pt-BR")}</span>
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <StatusBadge status={e.status} />
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <button className="btn-secondary" style={{ fontSize: 12, padding: "5px 12px" }}>Ver →</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

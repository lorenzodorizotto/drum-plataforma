import { jornadas } from "@/lib/mockData";
import StatusBadge from "@/components/StatusBadge";

const entregaveis = jornadas
  .filter(j => j.mentor === "Carlos Mendes")
  .flatMap(j =>
    j.modulos
      .filter(m => m.status !== "bloqueado")
      .map(m => ({
        id: `${j.id}-${m.ordem}`,
        mentorado: j.cliente,
        programa: j.programa,
        modulo: m.nome,
        entregavel: m.entregavel,
        status: m.status === "concluído" ? "entregue" : "em_andamento",
      }))
  );

export default function MentorEntregaveisPage() {
  return (
    <div style={{ padding: "36px 40px", maxWidth: 1000 }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: "0 0 4px" }}>Entregáveis</h1>
        <p style={{ fontSize: 14, color: "#666", margin: 0 }}>Todos os entregáveis dos módulos ativos e concluídos</p>
      </div>

      <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, overflow: "hidden" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "180px 180px 1fr 130px 80px",
          padding: "12px 20px",
          borderBottom: "1px solid #E0DDD8",
          background: "#F5F4F0",
          gap: 12,
        }}>
          {["Mentorado", "Módulo", "Entregável", "Status", ""].map(h => (
            <div key={h} style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</div>
          ))}
        </div>

        {entregaveis.map((e, i) => (
          <div
            key={e.id}
            style={{
              display: "grid",
              gridTemplateColumns: "180px 180px 1fr 130px 80px",
              padding: "14px 20px",
              borderBottom: i < entregaveis.length - 1 ? "1px solid #F0EFEB" : "none",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{e.mentorado}</div>
              <div style={{ fontSize: 11, color: "#999", marginTop: 1 }}>{e.programa.split(" ").slice(0, 2).join(" ")}</div>
            </div>
            <div style={{ fontSize: 13, color: "#666" }}>{e.modulo}</div>
            <div style={{ fontSize: 13, color: "#1A1A1A" }}>{e.entregavel}</div>
            <StatusBadge status={e.status} />
            <button className="btn-secondary" style={{ fontSize: 11, padding: "4px 10px" }}>
              {e.status === "entregue" ? "Ver" : "Aguardar"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

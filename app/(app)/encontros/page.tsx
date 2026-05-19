import { encontros } from "@/lib/mockData";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { Plus, CalendarCheck, Clock, User } from "lucide-react";

export default function EncontrosPage() {
  const proximos = encontros.filter(e => e.status === "agendado");
  const realizados = encontros.filter(e => e.status === "registrado");

  const Section = ({ title, items }: { title: string; items: typeof encontros }) => (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", margin: "0 0 14px" }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map(e => (
          <div key={e.id} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ background: "#FDF5F3", borderRadius: 10, padding: "8px 12px", textAlign: "center", minWidth: 50, flexShrink: 0 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#D85A30", lineHeight: 1 }}>{e.data.split("-")[2]}</div>
                  <div style={{ fontSize: 11, color: "#D85A30", textTransform: "uppercase" }}>
                    {new Date(e.data).toLocaleDateString("pt-BR", { month: "short" })}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 2 }}>{e.participante}</div>
                  <div style={{ fontSize: 13, color: "#666" }}>{e.jornada}</div>
                  <div style={{ fontSize: 13, color: "#999", marginTop: 2 }}>{e.objetivo}</div>
                </div>
              </div>
              <StatusBadge status={e.status} />
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center", paddingTop: 10, borderTop: "1px solid #F0EFEB" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#666" }}>
                <Clock size={12} /> {e.hora} · {e.duracao}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#666" }}>
                <User size={12} /> {e.mentor}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#666" }}>
                <CalendarCheck size={12} /> {e.modulo}
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                {e.status === "agendado" && (
                  <button className="btn-primary" style={{ fontSize: 12, padding: "5px 12px" }}>Registrar sessão</button>
                )}
                <button className="btn-secondary" style={{ fontSize: 12, padding: "5px 12px" }}>Ver detalhes</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ padding: "36px 40px", maxWidth: 900 }}>
      <PageHeader
        title="Encontros"
        description="Agenda de mentorias, registros e notas"
        action={
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={15} /> Agendar encontro
          </button>
        }
      />
      <Section title="Próximos encontros" items={proximos} />
      <Section title="Realizados" items={realizados} />
    </div>
  );
}

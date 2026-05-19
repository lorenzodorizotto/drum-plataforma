import { tarefas } from "@/lib/mockData";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { Plus } from "lucide-react";

const prioridadeColor: Record<string, string> = { alta: "#DC2626", média: "#D97706", baixa: "#1D9E75" };

export default function TarefasPage() {
  const abertas = tarefas.filter(t => t.status !== "concluída");
  const concluidas = tarefas.filter(t => t.status === "concluída");

  const TarefaRow = ({ t }: { t: typeof tarefas[0] }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderBottom: "1px solid #F0EFEB" }}>
      <div style={{ width: 18, height: 18, borderRadius: 5, border: `2px solid ${t.status === "concluída" ? "#1D9E75" : "#E0DDD8"}`, background: t.status === "concluída" ? "#1D9E75" : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {t.status === "concluída" && <span style={{ color: "white", fontSize: 10 }}>✓</span>}
      </div>
      <div style={{ flex: 1, overflow: "hidden" }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: t.status === "concluída" ? "#999" : "#1A1A1A", textDecoration: t.status === "concluída" ? "line-through" : "none" }}>{t.titulo}</div>
        <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{t.vinculo} · {t.responsavel}</div>
      </div>
      <div style={{ fontSize: 12, color: "#999", whiteSpace: "nowrap" }}>
        {new Date(t.prazo).toLocaleDateString("pt-BR")}
      </div>
      <div style={{ width: 8, height: 8, borderRadius: 99, background: prioridadeColor[t.prioridade] ?? "#ccc", flexShrink: 0 }} title={t.prioridade} />
      <StatusBadge status={t.status} />
    </div>
  );

  return (
    <div style={{ padding: "36px 40px", maxWidth: 900 }}>
      <PageHeader
        title="Tarefas"
        description="Próximos passos e ações em aberto"
        action={
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={15} /> Nova tarefa
          </button>
        }
      />

      <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
        <div style={{ padding: "14px 18px", borderBottom: "1px solid #E0DDD8", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>Em aberto ({abertas.length})</h3>
          <div style={{ display: "flex", gap: 6 }}>
            {["Alta", "Média", "Baixa"].map(p => (
              <span key={p} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 20, background: "#F5F4F0", color: "#666", cursor: "pointer" }}>{p}</span>
            ))}
          </div>
        </div>
        {abertas.map(t => <TarefaRow key={t.id} t={t} />)}
      </div>

      {concluidas.length > 0 && (
        <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: "1px solid #E0DDD8" }}>
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#999" }}>Concluídas ({concluidas.length})</h3>
          </div>
          {concluidas.map(t => <TarefaRow key={t.id} t={t} />)}
        </div>
      )}
    </div>
  );
}

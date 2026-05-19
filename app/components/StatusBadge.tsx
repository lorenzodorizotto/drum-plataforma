const styles: Record<string, { bg: string; color: string; label: string }> = {
  ativo: { bg: "#E6F7F1", color: "#1D9E75", label: "Ativo" },
  ativa: { bg: "#E6F7F1", color: "#1D9E75", label: "Ativa" },
  concluído: { bg: "#F0F0F0", color: "#666", label: "Concluído" },
  concluída: { bg: "#F0F0F0", color: "#666", label: "Concluída" },
  lead: { bg: "#EEF2FF", color: "#4F46E5", label: "Lead" },
  onboarding: { bg: "#FFF7E6", color: "#D97706", label: "Onboarding" },
  pausado: { bg: "#FFF7E6", color: "#D97706", label: "Pausado" },
  arquivado: { bg: "#F5F5F5", color: "#999", label: "Arquivado" },
  agendado: { bg: "#EEF2FF", color: "#4F46E5", label: "Agendado" },
  registrado: { bg: "#E6F7F1", color: "#1D9E75", label: "Registrado" },
  cancelado: { bg: "#FEF2F2", color: "#DC2626", label: "Cancelado" },
  aberta: { bg: "#F5F4F0", color: "#666", label: "Aberta" },
  em_andamento: { bg: "#FFF7E6", color: "#D97706", label: "Em andamento" },
  bloqueado: { bg: "#FEF2F2", color: "#DC2626", label: "Bloqueado" },
  bloqueada: { bg: "#FEF2F2", color: "#DC2626", label: "Bloqueada" },
  publicado: { bg: "#E6F7F1", color: "#1D9E75", label: "Publicado" },
  rascunho: { bg: "#F5F4F0", color: "#999", label: "Rascunho" },
  respondido: { bg: "#FFF7E6", color: "#D97706", label: "Respondido" },
  enviado: { bg: "#FFF7E6", color: "#D97706", label: "Enviado" },
  aprovado: { bg: "#E6F7F1", color: "#1D9E75", label: "Aprovado" },
};

export default function StatusBadge({ status }: { status: string }) {
  const s = styles[status] ?? { bg: "#F5F4F0", color: "#666", label: status };
  return (
    <span
      style={{
        background: s.bg,
        color: s.color,
        fontSize: 12,
        fontWeight: 500,
        padding: "3px 10px",
        borderRadius: 20,
        whiteSpace: "nowrap",
        display: "inline-block",
      }}
    >
      {s.label}
    </span>
  );
}

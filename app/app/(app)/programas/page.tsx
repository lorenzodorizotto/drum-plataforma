"use client";
import { programas } from "@/lib/mockData";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { Plus, BookOpen, Users, User, Briefcase } from "lucide-react";

const tipoIcon: Record<string, any> = { individual: User, familia: Users, mentor: Briefcase };

export default function ProgramasPage() {
  return (
    <div style={{ padding: "36px 40px", maxWidth: 1100 }}>
      <PageHeader
        title="Programas"
        description="Modelos reutilizáveis de trilhas e jornadas"
        action={
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={15} /> Novo programa
          </button>
        }
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {programas.map(p => {
          const Icon = tipoIcon[p.tipo] ?? BookOpen;
          return (
            <div key={p.id} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 22px", cursor: "pointer", transition: "border-color 0.15s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#D85A30"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD8"}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ width: 40, height: 40, background: "#FDF5F3", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={18} color="#D85A30" />
                </div>
                <StatusBadge status={p.status} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 6 }}>{p.nome}</div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5, marginBottom: 14 }}>{p.descricao}</div>
              <div style={{ display: "flex", gap: 16, paddingTop: 14, borderTop: "1px solid #F0EFEB" }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A" }}>{p.modulos}</div>
                  <div style={{ fontSize: 11, color: "#999" }}>módulos</div>
                </div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#D85A30" }}>{p.jornadas_ativas}</div>
                  <div style={{ fontSize: 11, color: "#999" }}>ativas</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

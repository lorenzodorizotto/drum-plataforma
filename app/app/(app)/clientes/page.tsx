import { clientes } from "@/lib/mockData";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import { Plus, Search, Users, User, Building2 } from "lucide-react";

const tipoIcon: Record<string, any> = { individual: User, família: Users, empresa: Building2 };

export default function ClientesPage() {
  return (
    <div style={{ padding: "36px 40px", maxWidth: 1100 }}>
      <PageHeader
        title="Clientes"
        description="Base de clientes individuais, famílias e empresas"
        action={
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={15} /> Novo cliente
          </button>
        }
      />

      {/* Filtros */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, background: "white", border: "1px solid #E0DDD8", borderRadius: 8, padding: "8px 14px" }}>
          <Search size={15} color="#999" />
          <input placeholder="Buscar cliente…" style={{ border: "none", outline: "none", fontSize: 14, color: "#1A1A1A", width: "100%", background: "transparent" }} />
        </div>
        {["Todos", "Ativo", "Onboarding", "Lead", "Concluído"].map(f => (
          <button key={f} style={{ padding: "7px 14px", borderRadius: 8, border: "1px solid #E0DDD8", background: f === "Todos" ? "#1A1A1A" : "white", color: f === "Todos" ? "white" : "#666", fontSize: 13, cursor: "pointer", fontWeight: f === "Todos" ? 600 : 400 }}>
            {f}
          </button>
        ))}
      </div>

      {/* Tabela */}
      <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #E0DDD8" }}>
              {["Cliente", "Tipo", "Programa", "Mentor", "Status", "Início", ""].map(h => (
                <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontSize: 12, fontWeight: 600, color: "#666", letterSpacing: "0.03em", textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clientes.map((c, i) => {
              const Icon = tipoIcon[c.tipo] ?? User;
              return (
                <tr key={c.id} style={{ borderBottom: i < clientes.length - 1 ? "1px solid #F0EFEB" : "none" }}>
                  <td style={{ padding: "14px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: "#FDF5F3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={15} color="#D85A30" />
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{c.nome}</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <span style={{ fontSize: 13, color: "#666", textTransform: "capitalize" }}>{c.tipo}</span>
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <span style={{ fontSize: 13, color: "#1A1A1A" }}>{c.programa}</span>
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <span style={{ fontSize: 13, color: "#666" }}>{c.mentor}</span>
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <StatusBadge status={c.status} />
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <span style={{ fontSize: 13, color: "#999" }}>
                      {c.inicio ? new Date(c.inicio).toLocaleDateString("pt-BR") : "—"}
                    </span>
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    <Link href={`/clientes/${c.id}`} style={{ fontSize: 13, color: "#D85A30", textDecoration: "none", fontWeight: 500 }}>Ver →</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import PageHeader from "@/components/PageHeader";
import { Users, Shield, Palette, Plug, FileSearch, Download } from "lucide-react";

const secoes = [
  { icon: Users, label: "Usuários", desc: "Criar, convidar, editar papéis e desativar usuários", action: "Gerenciar" },
  { icon: Shield, label: "Permissões", desc: "Definir o que cada papel pode ver e editar", action: "Configurar" },
  { icon: Palette, label: "Marca", desc: "Cores, logo, fonte e texto institucional", action: "Personalizar" },
  { icon: Plug, label: "Integrações", desc: "Calendário, e-mail, armazenamento e autenticação", action: "Configurar" },
  { icon: FileSearch, label: "Auditoria", desc: "Histórico de alterações em dados sensíveis", action: "Ver logs" },
  { icon: Download, label: "Exportação", desc: "Exportar dados para CSV, Markdown ou PDF", action: "Exportar" },
];

const usuarios = [
  { nome: "Carlos Mendes", email: "carlos@drum.com.br", papel: "Mentor", status: "ativo" },
  { nome: "Fernanda Lima", email: "fernanda@drum.com.br", papel: "Mentor", status: "ativo" },
  { nome: "Bruno Costa", email: "bruno@drum.com.br", papel: "Mentor", status: "ativo" },
  { nome: "Admin DRUM", email: "admin@drum.com.br", papel: "Admin", status: "ativo" },
];

export default function AdminPage() {
  return (
    <div style={{ padding: "36px 40px", maxWidth: 1000 }}>
      <PageHeader title="Administração" description="Configurações da plataforma DRUM" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }}>
        {secoes.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ width: 38, height: 38, background: "#FDF5F3", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                <Icon size={18} color="#D85A30" />
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: "#666", marginBottom: 14, lineHeight: 1.5 }}>{s.desc}</div>
              <button className="btn-secondary" style={{ fontSize: 12, padding: "5px 12px" }}>{s.action} →</button>
            </div>
          );
        })}
      </div>

      {/* Usuários */}
      <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #E0DDD8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>Usuários ativos</h3>
          <button className="btn-primary" style={{ fontSize: 12, padding: "5px 12px" }}>+ Convidar</button>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #E0DDD8" }}>
              {["Nome", "E-mail", "Papel", "Status", ""].map(h => (
                <th key={h} style={{ padding: "10px 16px", textAlign: "left", fontSize: 11, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: "0.03em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u, i) => (
              <tr key={u.email} style={{ borderBottom: i < usuarios.length - 1 ? "1px solid #F0EFEB" : "none" }}>
                <td style={{ padding: "12px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: "#D85A30", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, fontWeight: 700 }}>
                      {u.nome.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{u.nome}</span>
                  </div>
                </td>
                <td style={{ padding: "12px 16px", fontSize: 13, color: "#666" }}>{u.email}</td>
                <td style={{ padding: "12px 16px", fontSize: 13, color: "#666" }}>{u.papel}</td>
                <td style={{ padding: "12px 16px" }}>
                  <span style={{ fontSize: 12, background: "#E6F7F1", color: "#1D9E75", padding: "3px 10px", borderRadius: 20 }}>Ativo</span>
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <button className="btn-secondary" style={{ fontSize: 12, padding: "4px 10px" }}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";
import { conteudos } from "@/lib/mockData";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { Plus, FileText, Video, Link2, File, BookOpen } from "lucide-react";

const tipoIcon: Record<string, any> = { texto: FileText, vídeo: Video, link: Link2, PDF: File, template: BookOpen };
const tipoColor: Record<string, string> = { texto: "#4F46E5", vídeo: "#D85A30", link: "#1D9E75", PDF: "#D97706", template: "#666" };

export default function ConteudosPage() {
  return (
    <div style={{ padding: "36px 40px", maxWidth: 1100 }}>
      <PageHeader
        title="Conteúdos"
        description="Biblioteca de repertório, leituras, vídeos e templates"
        action={
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={15} /> Novo conteúdo
          </button>
        }
      />

      {/* Filtros */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {["Todos", "Texto", "Vídeo", "Template", "PDF", "Mentor", "Mentorado"].map(f => (
          <button key={f} style={{ padding: "6px 14px", borderRadius: 20, border: "1px solid #E0DDD8", background: f === "Todos" ? "#1A1A1A" : "white", color: f === "Todos" ? "white" : "#666", fontSize: 13, cursor: "pointer" }}>
            {f}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {conteudos.map(c => {
          const Icon = tipoIcon[c.tipo] ?? FileText;
          const color = tipoColor[c.tipo] ?? "#666";
          return (
            <div key={c.id} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px", cursor: "pointer", transition: "border-color 0.15s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#D85A30"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD8"}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={{ width: 34, height: 34, background: color + "15", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} color={color} />
                </div>
                <StatusBadge status={c.status} />
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A", marginBottom: 6, lineHeight: 1.4 }}>{c.titulo}</div>
              <div style={{ fontSize: 12, color: "#999", marginBottom: 12 }}>{c.programa} · {c.modulo}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "#F5F4F0", color: "#666" }}>{c.tipo}</span>
                <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "#F5F4F0", color: "#666" }}>{c.publico}</span>
                {c.tags.slice(0, 2).map(tag => (
                  <span key={tag} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 20, background: "#FDF5F3", color: "#D85A30" }}>{tag}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

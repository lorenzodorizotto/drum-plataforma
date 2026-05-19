"use client";
import PageHeader from "@/components/PageHeader";
import { Plus, BookOpen, FileText, CalendarCheck, Stethoscope, PackageCheck, Mail } from "lucide-react";

const templates = [
  { tipo: "Programa", desc: "Programa Carreira completo", icon: BookOpen, count: 7 },
  { tipo: "Programa", desc: "Trilha de Desenvolvimento de Sucessores", icon: BookOpen, count: 7 },
  { tipo: "Programa", desc: "Trilha de Transição do Sucedido", icon: BookOpen, count: 6 },
  { tipo: "Módulo", desc: "Módulo 05 – Prototipando", icon: FileText, count: null },
  { tipo: "Encontro", desc: "Roteiro de devolutiva do Termômetro", icon: CalendarCheck, count: null },
  { tipo: "Diagnóstico", desc: "Framework Life Design", icon: Stethoscope, count: null },
  { tipo: "Entregável", desc: "Plano de carreira final", icon: PackageCheck, count: null },
  { tipo: "Documento", desc: "Plano de sucessão", icon: FileText, count: null },
  { tipo: "E-mail", desc: "Convite para diagnóstico", icon: Mail, count: null },
];

const tipoColor: Record<string, string> = {
  Programa: "#4F46E5", Módulo: "#D85A30", Encontro: "#1D9E75",
  Diagnóstico: "#D97706", Entregável: "#666", Documento: "#999", "E-mail": "#059669",
};

export default function TemplatesPage() {
  return (
    <div style={{ padding: "36px 40px", maxWidth: 1100 }}>
      <PageHeader
        title="Templates"
        description="Modelos reutilizáveis de programas, módulos, encontros e diagnósticos"
        action={
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={15} /> Novo template
          </button>
        }
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {templates.map((t, i) => {
          const Icon = t.icon;
          const color = tipoColor[t.tipo] ?? "#666";
          return (
            <div key={i} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px", cursor: "pointer", transition: "border-color 0.15s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#D85A30"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD8"}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 34, height: 34, background: color + "15", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={16} color={color} />
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color, background: color + "10", padding: "3px 8px", borderRadius: 20 }}>{t.tipo}</span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A", marginBottom: 4, lineHeight: 1.4 }}>{t.desc}</div>
              {t.count && <div style={{ fontSize: 12, color: "#999" }}>{t.count} módulos</div>}
              <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                <button className="btn-secondary" style={{ fontSize: 12, padding: "5px 10px" }}>Editar</button>
                <button className="btn-primary" style={{ fontSize: 12, padding: "5px 10px" }}>Usar</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

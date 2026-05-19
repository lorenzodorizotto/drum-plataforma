"use client";
import { jornadas } from "@/lib/mockData";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Circle, Lock, Loader2, Clock } from "lucide-react";

const moduloStatusIcon: Record<string, any> = {
  concluído: CheckCircle2,
  em_andamento: Loader2,
  bloqueado: Lock,
  liberado: Circle,
};
const moduloStatusColor: Record<string, string> = {
  concluído: "#1D9E75",
  em_andamento: "#D85A30",
  bloqueado: "#CCC",
  liberado: "#666",
};

export default function JornadaPage({ params }: { params: { id: string } }) {
  const jornada = jornadas.find(j => j.id === params.id);
  if (!jornada) notFound();

  return (
    <div style={{ padding: "36px 40px", maxWidth: 1100 }}>
      <Link href="/jornadas" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#666", textDecoration: "none", marginBottom: 20 }}>
        <ArrowLeft size={14} /> Jornadas
      </Link>

      <PageHeader
        title={jornada.nome}
        description={jornada.programa}
        action={<StatusBadge status={jornada.status} />}
      />

      {/* Info cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 28 }}>
        {[
          { label: "Cliente", value: jornada.cliente },
          { label: "Mentor", value: jornada.mentor },
          { label: "Progresso", value: `${jornada.progresso}%` },
          { label: "Próximo marco", value: jornada.proximoMarco },
        ].map(({ label, value }) => (
          <div key={label} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "14px 16px" }}>
            <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6 }}>{label}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
        {/* Módulos */}
        <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ padding: "18px 24px", borderBottom: "1px solid #E0DDD8" }}>
            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>Módulos da trilha</h3>
          </div>
          <div>
            {jornada.modulos.map((m, i) => {
              const Icon = moduloStatusIcon[m.status] ?? Circle;
              const color = moduloStatusColor[m.status] ?? "#999";
              const isActive = m.status === "em_andamento";
              return (
                <div
                  key={m.ordem}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "16px 24px",
                    borderBottom: i < jornada.modulos.length - 1 ? "1px solid #F0EFEB" : "none",
                    background: isActive ? "#FDF5F3" : "white",
                    borderLeft: isActive ? "3px solid #D85A30" : "3px solid transparent",
                  }}
                >
                  <div style={{ paddingTop: 2 }}>
                    <Icon size={18} color={color} strokeWidth={isActive ? 2.5 : 1.8} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: m.status === "bloqueado" ? "#CCC" : "#1A1A1A" }}>
                          {m.ordem.toString().padStart(2, "0")} · {m.nome}
                        </div>
                        <div style={{ fontSize: 12, color: m.status === "bloqueado" ? "#DDD" : "#999", marginTop: 2 }}>
                          Entregável: {m.entregavel}
                        </div>
                      </div>
                      <StatusBadge status={m.status} />
                    </div>
                    {isActive && (
                      <button className="btn-primary" style={{ marginTop: 10, fontSize: 12, padding: "5px 12px" }}>
                        Abrir módulo →
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lateral */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600 }}>Progresso geral</h3>
            <ProgressBar value={jornada.progresso} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 12, color: "#666" }}>
              <span>{jornada.modulos.filter(m => m.status === "concluído").length} módulos concluídos</span>
              <span>{jornada.modulos.length} total</span>
            </div>
          </div>

          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600 }}>Ações rápidas</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Registrar encontro", "Ver entregáveis", "Aplicar diagnóstico", "Notas privadas"].map(a => (
                <button key={a} className="btn-secondary" style={{ textAlign: "left", width: "100%", fontSize: 13 }}>{a}</button>
              ))}
            </div>
          </div>

          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600 }}>Próximo marco</h3>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#FDF5F3", borderRadius: 8, padding: "10px 12px" }}>
              <Clock size={14} color="#D85A30" />
              <span style={{ fontSize: 13, color: "#D85A30", fontWeight: 500 }}>{jornada.proximoMarco}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { jornadas } from "@/lib/mockData";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";
import { Plus, Clock } from "lucide-react";

export default function JornadasPage() {
  return (
    <div style={{ padding: "36px 40px", maxWidth: 1100 }}>
      <PageHeader
        title="Jornadas"
        description="Programas em execução para clientes e famílias"
        action={
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={15} /> Nova jornada
          </button>
        }
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {jornadas.map(j => (
          <Link key={j.id} href={`/jornadas/${j.id}`} style={{ textDecoration: "none" }}>
            <div
              style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px", cursor: "pointer", transition: "border-color 0.15s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#D85A30"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD8"}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 4 }}>{j.nome}</div>
                  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#666" }}>{j.programa}</span>
                    <span style={{ fontSize: 12, color: "#999" }}>·</span>
                    <span style={{ fontSize: 13, color: "#666" }}>{j.cliente}</span>
                    <span style={{ fontSize: 12, color: "#999" }}>·</span>
                    <span style={{ fontSize: 13, color: "#666" }}>Mentor: {j.mentor}</span>
                  </div>
                </div>
                <StatusBadge status={j.status} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 200px", gap: 20, alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 12, color: "#999", marginBottom: 6 }}>Módulo atual: <strong style={{ color: "#666" }}>{j.moduloAtual}</strong></div>
                  <ProgressBar value={j.progresso} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Clock size={13} color="#999" />
                  <span style={{ fontSize: 12, color: "#999" }}>{j.proximoMarco}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

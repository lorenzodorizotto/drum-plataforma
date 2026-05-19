"use client";
import { familias } from "@/lib/mockData";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import { Plus, Building2, Users } from "lucide-react";

export default function FamiliasPage() {
  return (
    <div style={{ padding: "36px 40px", maxWidth: 1100 }}>
      <PageHeader
        title="Famílias Empresárias"
        description="Acompanhamento de sucessão em famílias"
        action={
          <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Plus size={15} /> Nova família
          </button>
        }
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
        {familias.map(f => (
          <Link key={f.id} href={`/familias/${f.id}`} style={{ textDecoration: "none" }}>
            <div
              style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "22px 24px", cursor: "pointer", transition: "border-color 0.15s, box-shadow 0.15s" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#D85A30";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(216,90,48,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD8";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: "#FDF5F3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Building2 size={20} color="#D85A30" />
                  </div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#1A1A1A" }}>{f.nome}</div>
                    <div style={{ fontSize: 13, color: "#666", marginTop: 2 }}>{f.empresa}</div>
                  </div>
                </div>
                <StatusBadge status={f.status} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                <div style={{ background: "#F5F4F0", borderRadius: 8, padding: "10px 12px" }}>
                  <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 2 }}>Mentor</div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#1A1A1A" }}>{f.mentor}</div>
                </div>
                <div style={{ background: "#F5F4F0", borderRadius: 8, padding: "10px 12px" }}>
                  <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 2 }}>Fase</div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: "#1A1A1A" }}>{f.fase}</div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Users size={13} color="#999" />
                <span style={{ fontSize: 12, color: "#666" }}>
                  {f.membros.length} membros: {f.membros.map(m => m.nome.split(" ")[0]).join(", ")}
                </span>
              </div>

              {/* Radar mini */}
              <div style={{ marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[
                  { label: "Next Gen", atual: f.radar.atual.nextGen, alvo: f.radar.alvo.nextGen },
                  { label: "Empreend.", atual: f.radar.atual.entrepreneurship, alvo: f.radar.alvo.entrepreneurship },
                  { label: "Governança", atual: f.radar.atual.governance, alvo: f.radar.alvo.governance },
                  { label: "Curr. Gen", atual: f.radar.atual.currentGen, alvo: f.radar.alvo.currentGen },
                ].map(eixo => (
                  <div key={eixo.label} style={{ flex: 1, minWidth: 70 }}>
                    <div style={{ fontSize: 10, color: "#999", marginBottom: 4 }}>{eixo.label}</div>
                    <div style={{ height: 4, background: "#E0DDD8", borderRadius: 99, overflow: "hidden" }}>
                      <div style={{ width: `${(eixo.atual / 4) * 100}%`, height: "100%", background: "#D85A30", borderRadius: 99 }} />
                    </div>
                    <div style={{ fontSize: 10, color: "#666", marginTop: 3 }}>{eixo.atual}/{eixo.alvo}</div>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

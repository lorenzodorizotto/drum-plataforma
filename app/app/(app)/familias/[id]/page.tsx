"use client";
import { familias, jornadas, encontros } from "@/lib/mockData";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import ProgressBar from "@/components/ProgressBar";
import DrumRadarChart from "@/components/RadarChart";
import Link from "next/link";
import { Building2, Users, CalendarCheck, ArrowLeft, ExternalLink } from "lucide-react";

export default function FamiliaPage({ params }: { params: { id: string } }) {
  const familia = familias.find(f => f.id === params.id);
  if (!familia) notFound();

  const radarData = [
    { eixo: "Next Generation", atual: familia.radar.atual.nextGen, alvo: familia.radar.alvo.nextGen },
    { eixo: "Empreendedorismo", atual: familia.radar.atual.entrepreneurship, alvo: familia.radar.alvo.entrepreneurship },
    { eixo: "Governança", atual: familia.radar.atual.governance, alvo: familia.radar.alvo.governance },
    { eixo: "Geração Atual", atual: familia.radar.atual.currentGen, alvo: familia.radar.alvo.currentGen },
  ];

  const jornadasFamilia = jornadas.filter(j => j.cliente.includes(familia.nome.split(" ")[1]));
  const encontrosFamilia = encontros.filter(e => e.jornada.includes(familia.nome.split(" ")[1])).slice(0, 3);

  const papelColor: Record<string, string> = {
    Sucedido: "#4F46E5",
    Sucessora: "#D85A30",
    Sucessor: "#D85A30",
    "Familiar convidada": "#666",
  };

  return (
    <div style={{ padding: "36px 40px", maxWidth: 1100 }}>
      <Link href="/familias" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#666", textDecoration: "none", marginBottom: 20 }}>
        <ArrowLeft size={14} /> Famílias
      </Link>

      <PageHeader
        title={familia.nome}
        description={familia.empresa}
        action={<StatusBadge status={familia.status} />}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20 }}>
        {/* Coluna principal */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Info */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { label: "Empresa", value: familia.empresa, icon: Building2 },
              { label: "Mentor", value: familia.mentor, icon: Users },
              { label: "Fase atual", value: familia.fase, icon: CalendarCheck },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "14px 16px" }}>
                <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6, display: "flex", alignItems: "center", gap: 5 }}>
                  <Icon size={11} /> {label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Mapa familiar */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px" }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", margin: "0 0 16px" }}>Mapa familiar</h3>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {familia.membros.map(m => (
                <div key={m.id} style={{ background: "#F5F4F0", borderRadius: 10, padding: "12px 16px", minWidth: 140 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: (papelColor[m.papel] ?? "#666") + "18", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: papelColor[m.papel] ?? "#666" }}>
                      {m.nome.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{m.nome}</div>
                  <div style={{ fontSize: 11, color: papelColor[m.papel] ?? "#666", marginTop: 2, fontWeight: 500 }}>{m.papel}</div>
                  <div style={{ fontSize: 11, color: "#999", marginTop: 1 }}>{m.geracao}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trilhas ativas */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px" }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", margin: "0 0 16px" }}>Trilhas ativas</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {jornadasFamilia.map(j => (
                <Link key={j.id} href={`/jornadas/${j.id}`} style={{ textDecoration: "none" }}>
                  <div style={{ border: "1px solid #E0DDD8", borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{j.nome}</div>
                        <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>{j.moduloAtual}</div>
                      </div>
                      <ExternalLink size={14} color="#999" />
                    </div>
                    <ProgressBar value={j.progresso} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Encontros */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px" }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", margin: "0 0 16px" }}>Encontros</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {encontrosFamilia.map(e => (
                <div key={e.id} style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 14px", background: "#F5F4F0", borderRadius: 8 }}>
                  <div style={{ textAlign: "center", minWidth: 36 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#D85A30" }}>{e.data.split("-")[2]}</div>
                    <div style={{ fontSize: 10, color: "#999", textTransform: "uppercase" }}>
                      {new Date(e.data).toLocaleDateString("pt-BR", { month: "short" })}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{e.participante}</div>
                    <div style={{ fontSize: 12, color: "#666" }}>{e.modulo} · {e.hora}</div>
                  </div>
                  <StatusBadge status={e.status} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna lateral – Radar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px" }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", margin: "0 0 4px" }}>Radar de Transição</h3>
            <p style={{ fontSize: 12, color: "#999", margin: "0 0 16px" }}>Atual vs. alvo por eixo</p>
            <DrumRadarChart data={radarData} />
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              {radarData.map(d => (
                <div key={d.eixo}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: "#666" }}>{d.eixo}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A" }}>{d.atual} / {d.alvo}</span>
                  </div>
                  <div style={{ height: 5, background: "#E0DDD8", borderRadius: 99 }}>
                    <div style={{ width: `${(d.atual / 4) * 100}%`, height: "100%", background: "#D85A30", borderRadius: 99 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Acordos familiares placeholder */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px" }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", margin: "0 0 12px" }}>Acordos familiares</h3>
            <div style={{ background: "#F5F4F0", borderRadius: 8, padding: "14px", textAlign: "center" }}>
              <p style={{ fontSize: 13, color: "#999", margin: 0 }}>Nenhum acordo registrado ainda.</p>
              <button className="btn-secondary" style={{ marginTop: 10, fontSize: 12, padding: "6px 12px" }}>
                + Registrar acordo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

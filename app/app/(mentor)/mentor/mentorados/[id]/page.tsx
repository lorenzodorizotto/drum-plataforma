"use client";
import { jornadas, encontros, tarefas } from "@/lib/mockData";
import { notFound } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import ProgressBar from "@/components/ProgressBar";
import StatusBadge from "@/components/StatusBadge";
import { ArrowLeft, CheckCircle2, Circle, Lock, Loader2, CalendarCheck } from "lucide-react";

const moduloIcon: Record<string, any> = {
  concluído: CheckCircle2,
  em_andamento: Loader2,
  bloqueado: Lock,
  liberado: Circle,
};
const moduloColor: Record<string, string> = {
  concluído: "#1D9E75",
  em_andamento: "#4F46E5",
  bloqueado: "#CCC",
  liberado: "#666",
};

export default function MentorMentoradoDetailPage({ params }: { params: { id: string } }) {
  const jornada = jornadas.find(j => j.id === params.id);
  if (!jornada) notFound();

  const [notaPrivada, setNotaPrivada] = useState("");
  const [notaCompartilhada, setNotaCompartilhada] = useState("");

  const proximoEncontro = encontros.find(
    e => e.status === "agendado" &&
    (e.participante.includes(jornada.cliente.split(" ")[0]) || e.participante.includes(jornada.cliente.split(" ")[1] ?? ""))
  );

  const tarefasAbertas = tarefas.filter(t =>
    t.responsavel === jornada.cliente || t.vinculo.includes(jornada.moduloAtual)
  );

  return (
    <div style={{ padding: "36px 40px", maxWidth: 1000 }}>
      <Link href="/mentor/mentorados" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#666", textDecoration: "none", marginBottom: 20 }}>
        <ArrowLeft size={14} /> Mentorados
      </Link>

      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1A1A1A", margin: "0 0 4px" }}>{jornada.cliente}</h1>
          <p style={{ fontSize: 14, color: "#666", margin: 0 }}>{jornada.programa}</p>
        </div>
        <StatusBadge status={jornada.status} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
        {[
          { label: "Progresso", value: `${jornada.progresso}%` },
          { label: "Módulo atual", value: jornada.moduloAtual.split(" – ")[0] },
          { label: "Próximo marco", value: jornada.proximoMarco },
        ].map(({ label, value }) => (
          <div key={label} style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "14px 16px" }}>
            <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6 }}>{label}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Módulos */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid #E0DDD8" }}>
              <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>Módulos da trilha</h3>
            </div>
            {jornada.modulos.map((m, i) => {
              const Icon = moduloIcon[m.status] ?? Circle;
              const color = moduloColor[m.status] ?? "#999";
              const isActive = m.status === "em_andamento";
              return (
                <div
                  key={m.ordem}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "14px 20px",
                    borderBottom: i < jornada.modulos.length - 1 ? "1px solid #F0EFEB" : "none",
                    background: isActive ? "#F0F0FE" : "white",
                    borderLeft: isActive ? "3px solid #4F46E5" : "3px solid transparent",
                  }}
                >
                  <div style={{ paddingTop: 2 }}>
                    <Icon size={17} color={color} strokeWidth={2} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: m.status === "bloqueado" ? "#CCC" : "#1A1A1A" }}>
                        {m.ordem.toString().padStart(2, "0")} · {m.nome}
                      </div>
                      <StatusBadge status={m.status} />
                    </div>
                    <div style={{ fontSize: 12, color: m.status === "bloqueado" ? "#DDD" : "#999", marginTop: 2 }}>
                      Entregável: {m.entregavel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Notas de sessão */}
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "20px 24px" }}>
            <h3 style={{ margin: "0 0 16px", fontSize: 15, fontWeight: 600 }}>Notas da sessão</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 99, background: "#4F46E5" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>Nota privada</span>
                  <span style={{ fontSize: 11, color: "#999" }}>Visível apenas para você</span>
                </div>
                <textarea
                  value={notaPrivada}
                  onChange={e => setNotaPrivada(e.target.value)}
                  placeholder="Observações, impressões e pontos de atenção..."
                  style={{ width: "100%", minHeight: 100, padding: "10px 12px", border: "1px solid #E0DDD8", borderRadius: 8, fontSize: 13, color: "#1A1A1A", background: "#FAFAF8", resize: "vertical", fontFamily: "inherit", outline: "none", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 99, background: "#1D9E75" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>Nota compartilhada</span>
                  <span style={{ fontSize: 11, color: "#999" }}>Visível para o mentorado</span>
                </div>
                <textarea
                  value={notaCompartilhada}
                  onChange={e => setNotaCompartilhada(e.target.value)}
                  placeholder="Resumo da sessão, próximos passos acordados..."
                  style={{ width: "100%", minHeight: 100, padding: "10px 12px", border: "1px solid #E0DDD8", borderRadius: 8, fontSize: 13, color: "#1A1A1A", background: "#FAFAF8", resize: "vertical", fontFamily: "inherit", outline: "none", boxSizing: "border-box" }}
                />
              </div>
              <button className="btn-primary" style={{ alignSelf: "flex-end", fontSize: 13 }}>Salvar notas</button>
            </div>
          </div>
        </div>

        {/* Lateral */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600 }}>Progresso geral</h3>
            <ProgressBar value={jornada.progresso} color="#4F46E5" />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 12, color: "#666" }}>
              <span>{jornada.modulos.filter(m => m.status === "concluído").length} concluídos</span>
              <span>{jornada.modulos.length} total</span>
            </div>
          </div>

          {proximoEncontro && (
            <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600 }}>Próximo encontro</h3>
              <div style={{ background: "#F0F0FE", borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <CalendarCheck size={14} color="#4F46E5" />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#4F46E5" }}>
                    {new Date(proximoEncontro.data).toLocaleDateString("pt-BR", { day: "2-digit", month: "long" })}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: "#666" }}>{proximoEncontro.hora} · {proximoEncontro.duracao}</div>
                <div style={{ fontSize: 12, color: "#666", marginTop: 4, lineHeight: 1.4 }}>{proximoEncontro.objetivo}</div>
              </div>
            </div>
          )}

          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600 }}>Tarefas abertas</h3>
            {tarefasAbertas.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {tarefasAbertas.slice(0, 4).map(t => (
                  <div key={t.id} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <div style={{ width: 14, height: 14, border: "1.5px solid #E0DDD8", borderRadius: 3, flexShrink: 0, marginTop: 2 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, color: "#1A1A1A", lineHeight: 1.4 }}>{t.titulo}</div>
                      <div style={{ fontSize: 11, color: "#999" }}>{new Date(t.prazo).toLocaleDateString("pt-BR")}</div>
                    </div>
                    <div style={{ width: 6, height: 6, borderRadius: 99, background: t.prioridade === "alta" ? "#DC2626" : t.prioridade === "média" ? "#D97706" : "#1D9E75", flexShrink: 0, marginTop: 4 }} />
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: 13, color: "#999", margin: 0 }}>Nenhuma tarefa aberta.</p>
            )}
            <button className="btn-secondary" style={{ width: "100%", marginTop: 12, fontSize: 12 }}>+ Adicionar tarefa</button>
          </div>

          <div style={{ background: "white", border: "1px solid #E0DDD8", borderRadius: 12, padding: "18px 20px" }}>
            <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 600 }}>Ações rápidas</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Registrar encontro", "Agendar próximo encontro", "Aplicar diagnóstico"].map(a => (
                <button key={a} className="btn-secondary" style={{ textAlign: "left", width: "100%", fontSize: 13 }}>{a}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

type RadarData = {
  eixo: string;
  atual: number;
  alvo: number;
};

export default function DrumRadarChart({ data }: { data: RadarData[] }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
        <PolarGrid stroke="#E0DDD8" />
        <PolarAngleAxis
          dataKey="eixo"
          tick={{ fontSize: 12, fill: "#666", fontFamily: "DM Sans" }}
        />
        <Radar
          name="Alvo"
          dataKey="alvo"
          stroke="#E0DDD8"
          fill="#E0DDD8"
          fillOpacity={0.3}
          strokeWidth={2}
          strokeDasharray="4 2"
        />
        <Radar
          name="Atual"
          dataKey="atual"
          stroke="#D85A30"
          fill="#D85A30"
          fillOpacity={0.25}
          strokeWidth={2.5}
        />
        <Legend
          iconType="circle"
          iconSize={8}
          formatter={(value) => (
            <span style={{ fontSize: 12, color: "#666" }}>{value}</span>
          )}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

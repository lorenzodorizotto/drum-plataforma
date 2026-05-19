export default function ProgressBar({ value, showLabel = true, color = "#D85A30" }: { value: number; showLabel?: boolean; color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div
        style={{
          flex: 1,
          height: 6,
          background: "#E0DDD8",
          borderRadius: 99,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: color,
            borderRadius: 99,
            transition: "width 0.4s ease",
          }}
        />
      </div>
      {showLabel && (
        <span style={{ fontSize: 12, color: "#666", minWidth: 32, textAlign: "right" }}>{value}%</span>
      )}
    </div>
  );
}

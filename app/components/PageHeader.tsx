export default function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 28,
      }}
    >
      <div>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: "#1A1A1A", margin: 0, letterSpacing: "-0.5px" }}>
          {title}
        </h1>
        {description && (
          <p style={{ fontSize: 14, color: "#666", margin: "6px 0 0", fontWeight: 400 }}>{description}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

interface StatChipProps {
  value: string;
  label: string;
}

export default function StatChip({ value, label }: StatChipProps) {
  return (
    <div
      className="glass rounded-2xl px-5 py-4 flex flex-col items-center text-center"
      style={{ minWidth: "120px" }}
    >
      <span
        className="text-2xl font-bold tracking-tight teal-text"
      >
        {value}
      </span>
      <span className="text-xs mt-1 whitespace-nowrap" style={{ color: "var(--muted)" }}>
        {label}
      </span>
    </div>
  );
}

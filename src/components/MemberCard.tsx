interface MemberCardProps {
  name: string;
  score: number;
  initials: string;
  color: string;
}

export default function MemberCard({ name, score, initials, color }: MemberCardProps) {
  return (
    <div
      className="flex flex-col items-center p-3 rounded-xl border bg-white"
      style={{ borderColor: "#e7e5e4" }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm mb-2"
        style={{ background: color }}
      >
        {initials}
      </div>
      <span className="text-xs text-center leading-tight mb-1" style={{ color: "#78716c" }}>
        {name}
      </span>
      <span className="text-xl font-bold" style={{ color: "#1c1917" }}>
        {score}
      </span>
    </div>
  );
}
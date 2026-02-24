import MemberCard from "./MemberCard";

interface Member {
  name: string;
  score: number;
  initials: string;
  color: string;
}

const MEMBERS: Member[] = [
  { name: "Benard Makodingo", score: 350, initials: "BM", color: "#57534e" },
  { name: "kigSmall Foot",    score: 225, initials: "KF", color: "#d97706" },
  { name: "Caroline Likhoi",  score: 117, initials: "CL", color: "#a8a29e" },
  { name: "Caroline Likhoi",  score: 321, initials: "CL", color: "#a8a29e" },
];

export default function MemberGrid() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:px-20" style={{ background: "#f5f5f4" }}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {MEMBERS.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}
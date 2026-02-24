import MembershipToggle from "./MembershipToggle";

interface Membership {
  highlight: string;
  label: string;
  description: string;
}

interface RecommendationSectionProps {
  onSignUp: (membershipName: string) => void;
}

const MEMBERSHIPS: Membership[] = [
  {
    highlight: "FOUNDATION",
    label: "MEMBERSHIP",
    description:
      "We invest for you, in shares and in the Mansa-X global fund. Service is free online with your personal representative, but service in the office may have extra charges.",
  },
  {
    highlight: "ECONOMY",
    label: "MEMBERSHIP",
    description:
      "We will invest your money for you at a guaranteed rate with the Mansa-X global fund. Service is free online with your personal representative, but service in the office may have extra charges.",
  },
];

export default function RecommendationSection({ onSignUp }: RecommendationSectionProps) {
  return (
    <div className="px-4 py-5 sm:px-6 md:px-8 lg:px-20 sm:py-8 space-y-4 sm:space-y-6 bg-white flex-1" id="memberships">
      <div className="max-w-2xl">
        <h3 className="text-sm sm:text-base font-bold" style={{ color: "#d97706" }}>
          Now let's make you great!
        </h3>
        <p className="text-xs sm:text-sm mt-1 leading-relaxed" style={{ color: "#78716c" }}>
          You have shown us where you are doing well and where we can support you to be great!
          From your profile we recommend these memberships. Pick on that fits you best and start
          your financial adventure
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {MEMBERSHIPS.map((membership, index) => (
          <MembershipToggle key={index} {...membership} onSignUp={onSignUp} />
        ))}
      </div>

      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="inline-block text-center text-xs sm:text-sm text-white rounded-full py-2 px-6 underline transition-opacity hover:opacity-90"
        style={{ background: "#d97706" }}
      >
        A closer look at the memberships details is available here
      </a>
    </div>
  );
}
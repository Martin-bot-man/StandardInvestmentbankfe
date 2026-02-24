export default function ProfileHeader() {
  return (
    <div
      style={{ background: "#44403c" }}
      className="text-white px-6 py-8 sm:py-10 md:py-12 flex flex-col items-center md:flex-row md:items-center md:gap-8 md:px-12 lg:px-20"
    >
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex-shrink-0 flex items-center justify-center text-2xl sm:text-3xl font-bold border-2 mb-3 md:mb-0"
        style={{ background: "#d97706", borderColor: "#fbbf24" }}
      >
        M
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">Michael</h2>
        <p className="text-sm md:text-base mt-1 leading-relaxed" style={{ color: "#d6d3d1" }}>
          You've officially joined your first investment knowledge club!
        </p>
      </div>
    </div>
  );
}
export function ProjectStatusBadges() {
  return (
    <div className="absolute top-8 right-8 flex flex-col gap-2 z-10">
      <span className="px-3.5 py-1.5 rounded-full text-sm font-semibold border border-white/10 bg-orange-900/80 text-orange-200 text-center min-w-[48px] select-none">
        WIP
      </span>
      <span className="px-3.5 py-1.5 rounded-full text-sm font-semibold border border-white/10 bg-green-900/80 text-green-200 text-center min-w-[48px] select-none">
        Demo
      </span>
    </div>
  );
}
import React from "react";

/**
 * Props:
 * - icon: svg/png import
 * - label: string
 * - value: string | number
 * - tone: "indigo" | "sky" | "violet" | ... (ixtiyoriy, gradient aksenti uchun)
 * - kind: "status" | undefined  -> "locked/unlocked/on/off" badge ranglari
 */
const SensorCard = ({ icon, label, value, tone = "indigo", kind }) => {
  const status = String(value).toLowerCase();

  const statusBadge =
    kind === "status" ? (
      <span
        className={
          "mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 " +
          (status.includes("unlock") || status === "on"
            ? "bg-emerald-500/15 text-emerald-200 ring-emerald-400/30"
            : status.includes("lock") || status === "off"
            ? "bg-rose-500/15 text-rose-200 ring-rose-400/30"
            : "bg-white/10 text-white/80 ring-white/20")
        }>
        <span
          className={
            "inline-block h-2.5 w-2.5 rounded-full " +
            (status.includes("unlock") || status === "on"
              ? "bg-emerald-400"
              : status.includes("lock") || status === "off"
              ? "bg-rose-400"
              : "bg-white/60")
          }
        />
        {String(value)}
      </span>
    ) : null;

  return (
    <div
      className="group rounded-2xl bg-white/10 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl shadow-black/10
                 hover:bg-white/12 hover:shadow-black/20 transition p-5">
      {/* gradient accent border */}
      <div
        className={`relative rounded-xl p-4 bg-white/5 ring-1 ring-white/10
          before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:content-['']
          before:bg-gradient-to-r before:from-${tone}-400/60 before:to-${tone}-200/30 before:opacity-60 before:blur-[1px]`}>
        <div className="flex items-center gap-4">
          <img src={icon} alt="" className="h-12 w-12 drop-shadow" />
          <div className="min-w-0">
            <p className="text-white/70 text-sm truncate">{label}</p>
            <h3 className="text-white text-2xl font-semibold tracking-tight">
              {value}
            </h3>
            {statusBadge}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorCard;

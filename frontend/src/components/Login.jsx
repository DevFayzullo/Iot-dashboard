import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cpu, Eye, EyeOff, Lock, User2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Demo delay
    await new Promise((r) => setTimeout(r, 600));

    if (username === "admin" && password === "1234") {
      navigate("/dashboard");
    } else {
      setError("Incorrect username or password.");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden 
                    bg-gradient-to-br from-indigo-600 via-sky-600 to-cyan-500 
                    flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/70 dark:bg-slate-900/60 shadow-2xl shadow-indigo-500/20 border border-white/40 dark:border-white/10 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="size-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg flex items-center justify-center">
                <Cpu className="size-7" />
              </div>
              <div className="absolute -right-1 -bottom-1 size-5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                IoT Control Console
              </h1>
              <p className="text-sm text-slate-600/80 dark:text-slate-300/80">
                Secure access to your sensors & dashboards
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Username
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User2 className="size-5 text-slate-400" />
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. admin"
                  className="w-full rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm px-3 pl-10 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Password
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="size-5 text-slate-400" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm px-3 pl-10 pr-10 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}>
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-xl border border-red-200/60 bg-red-50/80 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300 px-3 py-2 text-sm">
                {error}
              </div>
            )}

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 select-none text-slate-600 dark:text-slate-300">
                <input
                  type="checkbox"
                  className="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-indigo-700 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                onClick={() => alert("Password reset flow coming soon ✨")}>
                Forgot password?
              </button>
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white font-semibold py-3 shadow-lg shadow-indigo-600/30 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed">
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading && (
                  <svg
                    className="size-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                )}
                {loading ? "Signing in…" : "Sign In"}
              </span>
              <span
                aria-hidden
                className="absolute inset-0 bg-white/10 mix-blend-overlay"
              />
            </motion.button>

            <p className="text-xs text-center text-slate-500 dark:text-slate-400">
              Tip: demo creds →{" "}
              <span className="font-medium text-slate-700 dark:text-slate-200">
                admin / 1234
              </span>
            </p>
          </form>

          {/* Footer */}
          <div className="mt-6 border-t border-white/40 dark:border-white/10 pt-4">
            <p className="text-[11px] leading-5 text-slate-500 dark:text-slate-400 text-center">
              By continuing, you agree to the{" "}
              <a
                className="underline underline-offset-2 hover:text-slate-700 dark:hover:text-slate-200"
                href="#">
                Terms
              </a>{" "}
              &{" "}
              <a
                className="underline underline-offset-2 hover:text-slate-700 dark:hover:text-slate-200"
                href="#">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Tiny credit / environment badge */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-white/90">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1 backdrop-blur">
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
            </span>
            Secure environment
          </span>
          <span>•</span>
          <span>v1.0.0</span>
        </div>
      </motion.div>
    </div>
  );
}

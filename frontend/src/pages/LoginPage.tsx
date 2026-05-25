import { motion } from 'framer-motion'

import {
  ArrowRight,
  Lock,
  Mail
} from 'lucide-react'

import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  function handleLogin(
    event: React.FormEvent
  ) {
    event.preventDefault()

    navigate('/dashboard')
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-6">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 40
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6
        }}
        className="relative z-10 w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
      >
        <div className="mb-10">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/20">
            <div className="h-8 w-8 rounded-xl bg-cyan-300" />
          </div>

          <h1 className="text-5xl font-black tracking-tight text-white">
            Nexorium
          </h1>

          <p className="mt-4 text-base text-white/50">
            Intelligent ERP SaaS Platform
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <div className="space-y-2">
            <label className="text-sm text-white/60">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition focus-within:border-cyan-400">
              <Mail
                size={20}
                className="text-white/40"
              />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent text-white outline-none placeholder:text-white/30"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/60">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition focus-within:border-cyan-400">
              <Lock
                size={20}
                className="text-white/40"
              />

              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent text-white outline-none placeholder:text-white/30"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-5 py-4 font-bold text-black transition hover:scale-[1.02] hover:bg-cyan-300"
          >
            Continue

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </form>

        <div className="mt-8 flex items-center justify-between text-sm text-white/40">
          <button className="transition hover:text-white">
            Forgot password
          </button>

          <button className="transition hover:text-white">
            Create account
          </button>
        </div>
      </motion.div>
    </div>
  )
}
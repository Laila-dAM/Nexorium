export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816] p-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <h1 className="text-4xl font-black">
          Nexorium
        </h1>

        <p className="mt-2 text-white/50">
          Sign in to your account
        </p>

        <form className="mt-8 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-cyan-400"
          />

          <button
            className="mt-4 rounded-2xl bg-cyan-400 py-4 font-bold text-black transition hover:opacity-80"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
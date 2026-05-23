export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <p className="text-sm text-white/50">
          Revenue
        </p>

        <h3 className="mt-4 text-4xl font-black">
          $48,920
        </h3>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <p className="text-sm text-white/50">
          Customers
        </p>

        <h3 className="mt-4 text-4xl font-black">
          1,284
        </h3>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <p className="text-sm text-white/50">
          Sales
        </p>

        <h3 className="mt-4 text-4xl font-black">
          392
        </h3>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <p className="text-sm text-white/50">
          Productivity
        </p>

        <h3 className="mt-4 text-4xl font-black">
          86%
        </h3>
      </div>
    </div>
  )
}
import toast from 'react-hot-toast'

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from 'recharts'

const salesData = [
  {
    name: 'Jan',
    revenue: 12000
  },
  {
    name: 'Feb',
    revenue: 18000
  },
  {
    name: 'Mar',
    revenue: 14000
  },
  {
    name: 'Apr',
    revenue: 22000
  },
  {
    name: 'May',
    revenue: 26000
  },
  {
    name: 'Jun',
    revenue: 31000
  }
]

const recentSales = [
  {
    customer: 'NovaTech',
    value: '$4,200',
    status: 'Paid'
  },
  {
    customer: 'Pixel Agency',
    value: '$2,850',
    status: 'Pending'
  },
  {
    customer: 'HyperStart',
    value: '$7,100',
    status: 'Paid'
  },
  {
    customer: 'Future Labs',
    value: '$1,250',
    status: 'Processing'
  }
]

const metrics = [
  {
    title: 'Revenue',
    value: '$84,000',
    growth: '+18%'
  },
  {
    title: 'Customers',
    value: '1,284',
    growth: '+9%'
  },
  {
    title: 'Orders',
    value: '3,842',
    growth: '+24%'
  },
  {
    title: 'Conversion',
    value: '6.8%',
    growth: '+3%'
  }
]

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <button
          onClick={() =>
            toast.success(
              'Analytics updated successfully'
            )
          }
          className="rounded-2xl bg-cyan-400 px-5 py-3 font-bold text-black transition hover:bg-cyan-300"
        >
          Trigger Notification
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-white/50">
                  {metric.title}
                </p>

                <h3 className="mt-3 text-4xl font-black">
                  {metric.value}
                </h3>
              </div>

              <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-sm font-medium text-cyan-300">
                {metric.growth}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl xl:col-span-2">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                Revenue Analytics
              </h3>

              <p className="text-sm text-white/50">
                Monthly revenue overview
              </p>
            </div>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">
              Export
            </button>
          </div>

          <div className="h-[350px]">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient
                    id="colorRevenue"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="#22d3ee"
                      stopOpacity={0.8}
                    />

                    <stop
                      offset="95%"
                      stopColor="#22d3ee"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#ffffff10"
                />

                <XAxis
                  dataKey="name"
                  stroke="#94a3b8"
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#22d3ee"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="mb-6">
            <h3 className="text-2xl font-bold">
              Recent Sales
            </h3>

            <p className="text-sm text-white/50">
              Latest transactions
            </p>
          </div>

          <div className="space-y-4">
            {recentSales.map((sale) => (
              <div
                key={sale.customer}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div>
                  <strong className="block">
                    {sale.customer}
                  </strong>

                  <span className="text-sm text-white/50">
                    {sale.status}
                  </span>
                </div>

                <span className="font-bold text-cyan-300">
                  {sale.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">
              Team Productivity
            </h3>

            <p className="text-sm text-white/50">
              Weekly performance metrics
            </p>
          </div>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 transition hover:bg-white/10">
            View Report
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-6">
            <h4 className="text-lg font-semibold">
              Completed Tasks
            </h4>

            <strong className="mt-4 block text-5xl font-black text-cyan-300">
              84%
            </strong>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-6">
            <h4 className="text-lg font-semibold">
              Active Projects
            </h4>

            <strong className="mt-4 block text-5xl font-black text-cyan-300">
              12
            </strong>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-6">
            <h4 className="text-lg font-semibold">
              Team Efficiency
            </h4>

            <strong className="mt-4 block text-5xl font-black text-cyan-300">
              91%
            </strong>
          </div>
        </div>
      </div>
    </div>
  )
}
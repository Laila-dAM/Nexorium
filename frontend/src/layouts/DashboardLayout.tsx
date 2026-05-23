import { ReactNode } from 'react'
import { BarChart3, Boxes, LayoutDashboard, Users } from 'lucide-react'

type DashboardLayoutProps = {
  children: ReactNode
}

const navigation = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard
  },
  {
    name: 'Customers',
    icon: Users
  },
  {
    name: 'Inventory',
    icon: Boxes
  },
  {
    name: 'Analytics',
    icon: BarChart3
  }
]

export default function DashboardLayout({
  children
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#050816] text-white">
      <aside className="flex w-72 flex-col border-r border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="border-b border-white/10 p-8">
          <h1 className="text-3xl font-black tracking-tight">
            Nexorium
          </h1>

          <p className="mt-2 text-sm text-white/50">
            Intelligent ERP Platform
          </p>
        </div>

        <nav className="flex flex-1 flex-col gap-2 p-4">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <button
                key={item.name}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </button>
            )
          })}
        </nav>
      </aside>

      <main className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-white/10 bg-white/5 px-8 py-5 backdrop-blur-xl">
          <div>
            <h2 className="text-2xl font-bold">
              Dashboard
            </h2>

            <p className="text-sm text-white/50">
              Welcome back
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-full bg-cyan-400" />
          </div>
        </header>

        <div className="flex-1 p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
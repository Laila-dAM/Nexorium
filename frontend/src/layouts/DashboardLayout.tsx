import { ReactNode, useState } from 'react'

import {
  BarChart3,
  Bell,
  Boxes,
  ChevronLeft,
  LayoutDashboard,
  Menu,
  Search,
  Users
} from 'lucide-react'

import {
  Link,
  useLocation
} from 'react-router-dom'

import { motion } from 'framer-motion'

type DashboardLayoutProps = {
  children: ReactNode
}

const navigation = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: LayoutDashboard
  },
  {
    name: 'Customers',
    path: '/customers',
    icon: Users
  },
  {
    name: 'Inventory',
    path: '/inventory',
    icon: Boxes
  },
  {
    name: 'Analytics',
    path: '/analytics',
    icon: BarChart3
  }
]

export default function DashboardLayout({
  children
}: DashboardLayoutProps) {
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen bg-[#050816] text-white">
      <motion.aside
        animate={{
          width: collapsed ? 100 : 288
        }}
        className="flex flex-col border-r border-white/10 bg-white/5 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          {!collapsed && (
            <div>
              <h1 className="text-3xl font-black tracking-tight">
                Nexorium
              </h1>

              <p className="mt-1 text-sm text-white/50">
                ERP SaaS Platform
              </p>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-xl p-2 transition hover:bg-white/10"
          >
            {collapsed ? (
              <Menu size={22} />
            ) : (
              <ChevronLeft size={22} />
            )}
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-2 p-4">
          {navigation.map((item) => {
            const Icon = item.icon

            const isActive =
              location.pathname === item.path

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition ${
                  isActive
                    ? 'bg-cyan-400 text-black'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={20} />

                {!collapsed && (
                  <span>{item.name}</span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
            <div className="h-11 w-11 rounded-full bg-cyan-400" />

            {!collapsed && (
              <div>
                <strong className="block">
                  Admin User
                </strong>

                <span className="text-sm text-white/50">
                  Administrator
                </span>
              </div>
            )}
          </div>
        </div>
      </motion.aside>

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
            <div className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 lg:flex">
              <Search size={18} />

              <input
                placeholder="Search..."
                className="bg-transparent outline-none"
              />
            </div>

            <button className="rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
              <Bell size={20} />
            </button>

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
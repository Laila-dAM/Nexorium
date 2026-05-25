import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import DashboardLayout from '../layouts/DashboardLayout'

import DashboardPage from '../pages/DashboardPage'
import CustomersPage from '../pages/CustomersPage'
import InventoryPage from '../pages/InventoryPage'
import AnalyticsPage from '../pages/AnalyticsPage'
import LoginPage from '../pages/LoginPage'

function AppLayout() {
  return (
    <DashboardLayout>
      <Routes>
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/customers"
          element={<CustomersPage />}
        />

        <Route
          path="/inventory"
          element={<InventoryPage />}
        />

        <Route
          path="/analytics"
          element={<AnalyticsPage />}
        />
      </Routes>
    </DashboardLayout>
  )
}

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/*"
          element={<AppLayout />}
        />
      </Routes>
    </BrowserRouter>
  )
}
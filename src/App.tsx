import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Dashboard } from './pages/Dashboard'
import { Websites } from './pages/Websites'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {/* Sidebar */}
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
          
          {/* Main Content */}
          <div className="lg:ml-64">
            <Header setSidebarOpen={setSidebarOpen} />
            
            <main className="px-6 py-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/websites" element={<Websites />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
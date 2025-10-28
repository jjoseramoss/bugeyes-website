import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-[url('../images/eyes.jpg')]">
    {/* Sidebar */}
    <Sidebar />

    {/* Main content area */}
    <main className="flex-1 relative">
        {children}
    </main>        
    </div>
)
}

export default Layout
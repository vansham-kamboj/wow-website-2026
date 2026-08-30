import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, MessageSquareQuote, LogOut } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Leads', path: '/admin/leads', icon: <Users size={20} /> },
    { name: 'Testimonials', path: '/admin/testimonials', icon: <MessageSquareQuote size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-[#f5f6f8] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col z-10">
        <div className="h-20 flex items-center px-6 border-b border-gray-100">
          <div className="flex items-center gap-3 text-primary font-bold text-xl">
            <LayoutDashboard className="text-primary" size={24} />
            <span>Admin Panel</span>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-3">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 font-medium ${
                  isActive 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100 mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3.5 w-full rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 font-medium"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Simple top header */}
        <header className="h-24 bg-white border-b border-gray-200 flex flex-col justify-center px-10 shrink-0">
          <h1 className="text-2xl font-bold text-gray-800 capitalize">
            {location.pathname.split('/')[2] || 'Dashboard'}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {location.pathname.includes('leads') 
              ? 'Manage and track all enquiries in one place.' 
              : 'Manage student testimonials and reviews.'}
          </p>
        </header>
        
        {/* Scrollable content area */}
        <div className="flex-1 overflow-auto p-10" data-lenis-prevent="true">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

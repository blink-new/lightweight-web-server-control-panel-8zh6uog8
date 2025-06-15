import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Globe, Settings2 } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Websites', path: '/websites', icon: Globe },
    { name: 'PHP Settings', path: '/php-settings', icon: Settings2 },
  ];

  return (
    <div className="w-64 h-screen bg-card border-r border-border p-4 fixed top-0 left-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-primary">LightPanel</h1>
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-md hover:bg-muted transition-colors ${
                    isActive ? 'bg-primary text-primary-foreground' : 'text-foreground'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
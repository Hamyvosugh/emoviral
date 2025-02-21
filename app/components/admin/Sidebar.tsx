import { FC } from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Mail, 
  Users, 
  Settings, 
  BarChart,
  Calendar
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Mail, label: 'Contact Forms', href: '/dashboard/contact-forms' },
    { icon: Users, label: 'Users', href: '/dashboard/users' },
    { icon: Calendar, label: 'Appointments', href: '/dashboard/appointments' },
    { icon: BarChart, label: 'Analytics', href: '/dashboard/analytics' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  return (
    <aside className={`
      fixed left-0 top-0 z-40 h-screen 
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'w-64' : 'w-16'}
      bg-gray-900 text-white
    `}>
      <div className="h-full px-3 py-4 overflow-y-auto">
        <Link href="/dashboard" className="flex items-center mb-5 pl-2.5">
          <span className={`ml-2 text-xl font-semibold ${!isOpen && 'hidden'}`}>
            Admin Panel
          </span>
        </Link>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center p-2 rounded-lg hover:bg-gray-700 group"
              >
                <item.icon className="w-5 h-5" />
                <span className={`ml-3 ${!isOpen && 'hidden'}`}>
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

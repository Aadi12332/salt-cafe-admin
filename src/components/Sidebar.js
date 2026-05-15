
import { NavLink, useNavigate } from "react-router-dom";
import {
  Grid,
  MapPin,
  Calendar,
  ShoppingCart,
  Gift,
  Users,
  Info,
  FileText,
  HelpCircle,
  DollarSign,
  Star,
  LogOut,
} from "lucide-react";
import logoSvg from "../assest/images/logo.svg";

const navItems = [
  { label: "Dashboard", icon: Grid, path: "/dashboard" },
  { label: "Branches", icon: MapPin, path: "/branches" },
  { label: "Reservations", icon: Calendar, path: "/reservations" },
  { label: "Orders", icon: ShoppingCart, path: "/orders" },
  { label: "Offers", icon: Gift, path: "/offers" },
  { label: "Users", icon: Users, path: "/users" },
  { label: "About Us", icon: Info, path: "/about-us" },
  { label: "Terms & Conditions", icon: FileText, path: "/terms" },
  { label: "FAQ's", icon: HelpCircle, path: "/faqs" },
  { label: "Refer & Earn", icon: DollarSign, path: "/refer" },
  { label: "Reviews", icon: Star, path: "/reviews" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <aside className="w-[280px] h-screen overflow-auto border-r border-slate-200 bg-white">
      <div className="px-6 py-8 flex flex-col justify-between h-full">
        <div>
          <div className="">
            <img src={logoSvg} alt="Salt Cafe Logo" className="h-14 w-auto mx-auto" />
          </div>

          <nav className="mt-8 space-y-2 h-[calc(100vh-255px)] overflow-auto scroll-hide">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `w-full flex items-center gap-1 rounded-lg px-2 py-2 text-left transition ${
                      isActive ? "bg-[#C86F40] text-[#fff]" : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center text-base">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 rounded-3xl border border-[#f1b48e] bg-[#fff4e6] px-4 py-3 text-sm font-semibold text-[#b64f0f] transition hover:bg-[#ffe4c9]"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

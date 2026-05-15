
import { useNavigate } from "react-router-dom";
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
  { label: "Dashboard", icon: Grid, active: true },
  { label: "Branches", icon: MapPin },
  { label: "Reservations", icon: Calendar },
  { label: "Orders", icon: ShoppingCart },
  { label: "Offers", icon: Gift },
  { label: "Users", icon: Users },
  { label: "About Us", icon: Info },
  { label: "Terms & Conditions", icon: FileText },
  { label: "FAQ's", icon: HelpCircle },
  { label: "Refer & Earn", icon: DollarSign },
  { label: "Reviews", icon: Star },
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

        <nav className="mt-8 space-y-2 h-[calc(100vh-255px)] overflow-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                className={`w-full flex items-center gap-3 rounded-3xl px-4 py-3 text-left transition ${
                  item.active
                    ? "bg-[#f5d8c0] text-[#b64f0f]"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#f8e6d8] text-base">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
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

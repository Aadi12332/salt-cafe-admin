
import { Bell, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import NotificationDrawer from "./NotificationDrawer";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] text-[#5D5D5D]">Welcome <span className="text-[#C86F40] font-bold">George</span></h1>
        </div>

        <div className="flex items-center gap-4">
          <NotificationDrawer />
             <button
      onClick={() => navigate("/admin-profile")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C86F40] text-white font-semibold"
    >
      <User className="h-5 w-5" />
    </button>
        </div>
      </div>
    </header>
  );
}

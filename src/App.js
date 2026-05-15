import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import OTP from "./pages/OTP";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import Branches from "./pages/Branches";
import Reservations from "./pages/Reservations";
import Orders from "./pages/Orders";
import Offers from "./pages/Offers";
import UsersPage from "./pages/UsersPage";
import AboutUs from "./pages/AboutUs";
import TermsConditions from "./pages/TermsConditions";
import FAQs from "./pages/FAQs";
import ReferAndEarn from "./pages/ReferAndEarn";
import Reviews from "./pages/Reviews";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import AdminProfile from "./pages/AdminProfile";

function ProtectedLayout() {
  return (
    <div className="min-h-screen bg-[#f8f2ed]">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="px-5 py-5 h-[calc(100vh-85px)] overflow-auto scroll-hide">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PublicRoute />}>
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/reset" element={<Reset />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="admin-profile" element={<AdminProfile />} />
            <Route path="branches" element={<Branches />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="orders" element={<Orders />} />
            <Route path="offers" element={<Offers />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="terms" element={<TermsConditions />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="refer" element={<ReferAndEarn />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
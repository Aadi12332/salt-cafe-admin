import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import OTP from "./pages/OTP";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

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
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
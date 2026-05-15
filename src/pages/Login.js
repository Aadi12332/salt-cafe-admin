import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import loginBg from "../assest/images/loginbg.jpg";
import loginLogo from "../assest/images/logincontent.png";
import CommonButton from "../components/CommonButton";

export default function Login() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    email: "admin@saltcafe.com",
    password: "admin@123",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (form.email === "admin@saltcafe.com" && form.password === "admin@123") {
        localStorage.setItem("auth", "1");
        nav("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    }, 900);
  };

  return (
    <div className="h-screen flex lg:flex-row flex-col gap-5 lg:gap-0">
      <div className="lg:w-[60%] bg-black text-white flex items-center justify-center text-3xl relative">
        <img
          src={loginBg}
          alt="login background"
          className="lg:h-full w-full object-cover h-[400px]"
        />
        <img
          src={loginLogo}
          alt="login logo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[447px]"
        />
      </div>

      <div className="lg:w-[40%] lg:h-svh lg:overflow-auto flex items-center py-10 lg:py-0">
        <div className="w-full max-w-[490px] mx-auto space-y-6 px-6">
          <h1 className="text-center text-3xl font-bold text-[#C86F40] mb-20">
            Login
          </h1>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Welcome Back,</h2>
            <p className="text-gray-500">
              Login here to continue to the admin portal
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Username</label>
              <input
                className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C86F40]"
                placeholder="Enter Username"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C86F40]"
                  placeholder="Enter Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 inline-flex items-center text-slate-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#C86F40]" />
                Remember me
              </label>

              <span
                onClick={() => nav("/forgot")}
                className="cursor-pointer text-gray-500 hover:text-[#C86F40]"
              >
                Forgot Password?
              </span>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <CommonButton
              onClick={handleLogin}
              className={loading ? "opacity-70 cursor-not-allowed" : ""}
            >
              {loading ? "Logging in..." : "Login"}
            </CommonButton>
          </div>
        </div>
      </div>
    </div>
  );
}


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../assest/images/loginbg.jpg";
import loginLogo from "../assest/images/logincontent.png";
import CommonButton from "../components/CommonButton";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Forgot() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      nav("/otp");
    }, 1200);
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
            Forgot Password?
          </h1>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">
              Set New Password
            </h2>
            <p className="text-sm text-slate-500">
              Input your email to recover password to access App Name account
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                className="w-full mt-1 rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-[#C86F40] focus:ring-2 focus:ring-[#C86F40]/20"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <CommonButton onClick={handleSendOTP} className="relative">
              {loading ? "Continuing..." : "Continue"}
            </CommonButton>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <span>OR</span>
            </div>

            <p className="text-center text-sm text-slate-500">
              Remember Password?{' '}
              <span
                onClick={() => nav("/")}
                className="cursor-pointer text-[#C86F40] font-semibold"
              >
                Back to Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

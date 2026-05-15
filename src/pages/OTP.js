
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../assest/images/loginbg.jpg";
import loginLogo from "../assest/images/logincontent.png";
import CommonButton from "../components/CommonButton";

export default function OTP() {
  const nav = useNavigate();
  const [otpDigits, setOtpDigits] = useState(Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resent, setResent] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (resent) {
      setTimeLeft(300);
    }
  }, [resent]);

  const handleVerify = () => {
    const otp = otpDigits.join("");
    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }
    if (!/^\d{6}$/.test(otp)) {
      setError("Enter a valid 6-digit OTP.");
      return;
    }

    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      nav("/reset");
    }, 1200);
  };

  const handleResend = () => {
    setError("");
    setResent(true);
    setTimeout(() => setResent(false), 1800);
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const digits = [...otpDigits];
    digits[index] = value;
    setOtpDigits(digits);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
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
          <h1 className="text-center text-3xl font-bold text-[#C86F40] mb-20">OTP Verification</h1>
          <div className="space-y-2">
            <p className="text-center text-sm text-slate-500">
              Our team already sent you an email in your email{' '}
              <span className="font-semibold text-[#C86F40]">example@gmail.com</span>{' '}
              to access back your account.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 rounded-3xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
            <span>{`${String(Math.floor(timeLeft / 60)).padStart(2, "0")}:${String(timeLeft % 60).padStart(2, "0")}`}</span>
          </div>

          <div className="grid grid-cols-6 gap-3">
            {otpDigits.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                ref={(el) => (inputRefs.current[index] = el)}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="h-14 w-full rounded-lg border border-slate-300 bg-white text-center text-xl font-semibold focus:border-[#C86F40] focus:outline-none focus:ring-2 focus:ring-[#C86F40]/30"
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {resent && <p className="text-green-500 text-sm text-center">OTP resent successfully. Check your inbox.</p>}

          <CommonButton onClick={handleVerify} className="relative">
            {loading ? "Continuing..." : "Continue"}
          </CommonButton>

          <div className="text-center text-sm text-gray-500">
            Didn&apos;t receive it?{' '}
            <button type="button" onClick={handleResend} className="text-[#C86F40] font-semibold">
              Resend Code
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            Back to{' '}
            <span onClick={() => nav("/")} className="cursor-pointer text-[#C86F40] font-semibold">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

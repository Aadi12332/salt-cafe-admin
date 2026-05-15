
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import loginBg from "../assest/images/loginbg.jpg";
import loginLogo from "../assest/images/logincontent.png";
import CommonButton from "../components/CommonButton";

export default function Reset() {
  const nav = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const lengthValid = password.length >= 8 && password.length <= 20;
  const uppercaseValid = /[A-Z]/.test(password);
  const lowercaseValid = /[a-z]/.test(password);
  const numberValid = /[0-9]/.test(password);
  const specialValid = /[!@#$%^&*()\/?{}\[\]~]/.test(password);
  const allRulesValid = lengthValid && uppercaseValid && lowercaseValid && numberValid && specialValid;

  const handleReset = () => {
    if (!password || !confirmPassword) {
      setError("Please fill in both fields.");
      return;
    }
    if (!allRulesValid) {
      setError("Please meet all password requirements.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      nav("/");
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

      <div className="lg:w-[40%] lg:h-svh lg:overflow-auto flex items-center py-10 lg:pb-0">
        <div className="w-full max-w-[490px] mx-auto space-y-6 px-6">
          <h1 className="text-center text-3xl font-bold text-[#C86F40] mb-20">Set New Password</h1>
          <div className="space-y-2">
            <p className="text-center text-sm text-slate-500">
              Enter your new password here to continue with{' '}
              <span className="font-semibold text-[#C86F40]">THE SALT CAFE</span>
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">New Password</label>
              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C86F40]"
                  placeholder="Enter your Password here"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <p className="mt-2 text-right text-xs text-slate-400">e.g. P@ssw0rd2024!</p>
            </div>

            <div>
              <label className="text-sm font-medium">Re-enter New Password</label>
              <div className="relative mt-2">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C86F40]"
                  placeholder="Re-Enter your Password here"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 inline-flex items-center text-slate-500"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <p className="mt-2 text-right text-xs text-slate-400">e.g. P@ssw0rd2024!</p>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <CommonButton onClick={handleReset} className={loading ? "opacity-70 cursor-not-allowed" : ""}>
              {loading ? "Saving..." : "Save"}
            </CommonButton>
          </div>

          <div className="border-t border-slate-200 pt-6 text-sm text-slate-500">
            <div className="mb-2">
              <span className="font-semibold text-slate-900">Length:</span>{' '}
              <span className={lengthValid ? 'text-emerald-600' : 'text-slate-500'}>
                Minimum 8 characters, max 20 characters.
              </span>
            </div>
            <div className="font-semibold text-slate-900">Complexity:</div>
            <p className="mt-2 text-slate-500">Must include at least one of each:</p>
            <ul className="mt-3 space-y-2 pl-5">
              <li className={uppercaseValid ? 'text-emerald-600' : 'text-slate-500'}>
                • Uppercase Letter (A–Z)
              </li>
              <li className={lowercaseValid ? 'text-emerald-600' : 'text-slate-500'}>
                • Lowercase Letter (a–z)
              </li>
              <li className={numberValid ? 'text-emerald-600' : 'text-slate-500'}>
                • Number (0–9)
              </li>
              <li className={specialValid ? 'text-emerald-600' : 'text-slate-500'}>
                • Special Character (!@#$%^&*()?/{}[]~)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

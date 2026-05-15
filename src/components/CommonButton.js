export default function CommonButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-[#C86F40] hover:opacity-90 text-white py-3 rounded-lg font-semibold ${className}`}
    >
      {children}
    </button>
  );
}
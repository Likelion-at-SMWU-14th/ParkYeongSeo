
export default function GoldButton({
  children,
  onClick,
  disabled = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      className="gold-button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

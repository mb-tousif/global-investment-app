const footerStyle: React.CSSProperties = {
  padding: "1rem",
  textAlign: "center",
};
export default function Footer() {
  return (
    <div style={footerStyle} className="bg-[#ebf6f5]">
      <p className="text-zinc-900 m-8">
        All right reserved & Copyright &#169; {new Date().getFullYear()}.
      </p>
    </div>
  );
}

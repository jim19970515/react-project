import { NavLink } from "react-router-dom";
export function NavBar() {
  const navItems = [
    { label: "首頁", path: "/" },
    { label: "房間", path: "/room" },
    { label: "設施與服務", path: "/services" },
    { label: "品牌", path: "/brand" },
    { label: "聯繫我們", path: "/contact" }
  ];

  return (
    <>
      <nav className="flex justify-center items-center gap-4 h-16 w-full bg-[#A12245] text-white z-1">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

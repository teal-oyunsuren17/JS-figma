import "./header.css";
import HeaderContact from "./headerContact";
import HeaderLogo from "./headerLogo";
import HeaderMenu from "./headerMenu";

export default function Header() {
  return (
    <div>
      <HeaderContact />
      <HeaderLogo />
      <HeaderMenu />
    </div>
  );
}

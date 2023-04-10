import { INavbar } from "./Navbar";
import { UserInfo } from "../../typing";

const userInfo: UserInfo = {
  username: "Johnathan",
  occupation: "Software Engineer",
};

const navbar: INavbar = {
  logoUrl: "/logo-blue.svg",
  showLogo: true,
  navItems: ["Home", "About us", "Our services", "Blog"],
  userInformation: userInfo,
};

export const mockNavbarTemplateProps = {
  navbar,
};

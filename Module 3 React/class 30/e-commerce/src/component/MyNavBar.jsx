import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";

import { Image } from "@heroui/image";
import { logo2 } from "../images";
import { Navigate, useNavigate } from "react-router-dom";


export const AcmeLogo = () => {


  return (
    // <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    //   <path
    //     clipRule="evenodd"
    //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
    //     fill="currentColor"
    //     fillRule="evenodd"
    //   />
    // </svg>
    <Image  width={100} src={logo2} />
  );
};

export default function MyNavBar() {

  
  const isLogin = !!localStorage.getItem('token')
  console.log(isLogin)

  const navigate = useNavigate()

  const logout = ()=> {
    console.log('logout')
    localStorage.removeItem('token')
    navigate('/signin')
  }

  return ( 
    <Navbar className="bg-[#DB0503]">
      <NavbarBrand>
        <AcmeLogo />
        {/* <p className="font-bold text-inherit">Vieculo</p> */}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 text-white" justify="center">
        <NavbarItem className="text-white">
          <Link color="" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem className="text-white">
          <Link color="" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem className="text-white">
          <Link color=""  href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex text-white">
          {/* <Link color="" href="#">Login</Link> */}
          {
            isLogin ? <Button onPress={logout}  className="bg-black text-white">Logout</Button> : <Link color="" href="#">Login</Link>
          }
        </NavbarItem>
        {
          !isLogin ?   <NavbarItem>
          <Button className="bg-black text-white" as={Link} href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> : ''
        }
      
      </NavbarContent>
    </Navbar>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, MobileNav, Typography, Button, IconButton, } from "@material-tailwind/react";
import { useAuthContext } from "../hooks/useAuthContext";
 
export default function NavbarOne() {
  const {user} = useAuthContext()
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 items-center">
      <li className="p-1 NavItem"><Link to="/home">Home</Link></li>
      <li className="p-1 NavItem"><Link to="/about">About</Link></li>
      <li className="p-1 NavItem"><Link to="/blog">Blog</Link></li>
      <li className="p-1 NavItem"><Link to="/artists">Artists</Link></li>
      <li className="p-1 NavItem"><Link to="/contact">Contact</Link></li>
      {user&& <p>||</p>}
      {user && <li className="p-1 NavItem"><Link to="/create">Create</Link></li>}
      {user && <li className="p-1 NavItem"><Link to="/profile">Profile</Link></li>}
      {!user &&<li className="p-1 NavItem"><Link to="/login">Login</Link></li>}
    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl py-1 px-4 lg:px-8 lg:py-4 bg-transparent border-none shadow-lg rounded-lg mt-2">
      <div className="container mx-auto flex items-center justify-between">

        <div className="hidden lg:block">{navList}</div>

        <Button variant="gradient" size="sm" className="hidden lg:inline-block outlineBtn">
          <span>logout</span>
        </Button>

        <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden mb-5 mr-2 mt-0" ripple={false} onClick={() => setOpenNav(!openNav)} >

          {openNav ? ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} > <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg> 
          
          ) : ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} > <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /> </svg> )}

        </IconButton>


      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto bg-opacity-5 text-contrast">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}
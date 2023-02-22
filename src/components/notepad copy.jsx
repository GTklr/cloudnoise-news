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
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="ml-5 p-2"><Link to="/home">Home</Link></li>
      <li className="p-2"><Link to="/about">About</Link></li>
      <li className="p-2"><Link to="/blog">Blog</Link></li>
      <li className="p-2"><Link to="/artists">Artists</Link></li>
      <li className="p-2"><Link to="/contact">Contact</Link></li>
      {user && <li className="p-2"><Link to="/create">Create</Link></li>}
      {!user &&<li className="p-2"><Link to="/login">Login</Link></li>}

    </ul>
  );
 
  return (
    <Navbar className="mx-auto max-w-screen-xl bg-third text-white">
      <div className=" mx-auto flex items-center justify-between">
        <ul className="flex justify-start">
          <li className="ml-5 p-2"><Link to="/home">Home</Link></li>
          <li className="p-2"><Link to="/about">About</Link></li>
          <li className="p-2"><Link to="/blog">Blog</Link></li>
          <li className="p-2"><Link to="/artists">Artists</Link></li>
          <li className="p-2"><Link to="/contact">Contact</Link></li>
          {user && <li className="p-2"><Link to="/create">Create</Link></li>}
          {!user &&<li className="p-2"><Link to="/login">Login</Link></li>}
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href="#" className="flex items-center">
              Pages
            </a>
          </Typography>
          {user && <li className="mr-5 p-2"><Link to={`/profile/${user?.displayName}`}>profile</Link></li>}
          
        </ul>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
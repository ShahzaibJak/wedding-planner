import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../useAuthContext";


const Navbar = () => {

  const { user, handleSignOut } = useAuthContext()

  const signOut = () => {
    handleSignOut()
  }

  const navLinks = <>
    <li> <NavLink to='/'>Home</NavLink> </li>
    <li> <NavLink to='/service'>Service</NavLink> </li>
    <li> <NavLink to='/about-us'>About us</NavLink> </li>
    {/* <li> <NavLink to='/gallery'>Gallery</NavLink> </li> */}
    {/* <li> <NavLink to='/shop'>Shop</NavLink> </li> */}

  </>


  return (
    <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <img className="h-8 w-24" src="https://ucarecdn.com/658cc998-5f4a-4e8e-bb43-5f99132e56a2/logo.png" alt="Perfect Planning" />
        </a>
      </div>
      <div className="navbar-center w-1/2 hidden lg:flex lg:flex-row lg:items-center lg:justify-end">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
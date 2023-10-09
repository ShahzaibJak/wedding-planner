import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../useAuthContext";


const Navbar = () => {

    const {user, handleSignOut} = useAuthContext()

    const signOut =()=>{
        handleSignOut()
    }

    const navLinks = <>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/service'>Service</NavLink> </li>
        <li> <NavLink to='/about-us'>About us</NavLink> </li>
        
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
    <a className="btn btn-ghost normal-case text-xl">LOVEO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div>


  </div>


  <div className="navbar-end">
{
    user? <div className="flex gap-4">
        <div className="w-12 h-12 bg-slate-600 rounded-full flex justify-center items-center">
    <img src="/public/10.png" alt="" />
</div>
<button onClick={signOut}  className="btn">Logout</button>
    </div>
: 

<div>
    <NavLink to='/login'><button className="btn">Login/Register</button></NavLink>
    </div>
}
  </div>


</div>
    );
};

export default Navbar;
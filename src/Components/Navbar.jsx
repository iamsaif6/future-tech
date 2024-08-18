import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { FiGift } from 'react-icons/fi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Button } from 'flowbite-react';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  console.log('from nav', loading, user);

  //handle logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Logout Sucessfull');
      })
      .catch(error => {
        console.log(error.message);
        toast.success(error.message);
      });
  };

  return (
    <div className=" bg-[#0B1620] fixed w-full z-50 md:relative">
      <div className="max-w-[1280px] px-4 mx-auto py-4">
        <div className="flex justify-between items-center">
          <Logo></Logo>
          <ul className="flex items-center gap-7">
            <NavLink className="hidden md:block">
              <span className="flex gap-[17px] items-center">
                <FiGift className="text-primary text-[22px]" />
                <span className="text-white mb-0">
                  Offers
                  <span className="block opacity-45 text-[11px] font-light">Latest Offers</span>
                </span>
              </span>
            </NavLink>
            <NavLink className="hidden md:block">
              <span className="flex gap-[17px] items-center">
                <AiFillThunderbolt className="text-primary text-[22px]" />
                <span className="text-white mb-0">
                  Gadget Fest
                  <span className="block opacity-45 text-[11px] font-light">Special Deals</span>
                </span>
              </span>
            </NavLink>
            {user ? (
              <Button onClick={handleLogout} size="md">
                Logout
              </Button>
            ) : (
              <li className="flex gap-[17px] items-center">
                <FaUserAlt className="text-primary text-[22px]" />
                <p className="text-white mb-0">
                  Account
                  <span className="block  text-[11px] font-light">
                    <NavLink className="hover:text-primary hover:opacity-100 opacity-45" to="/register">
                      Register
                    </NavLink>
                    <span className="opacity-45"> or </span>
                    <NavLink className="hover:text-primary hover:opacity-100 opacity-45" to="/login">
                      Login
                    </NavLink>
                  </span>
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
// import Footer from '../Components/Footer';

const Main = () => {
  const { saif } = useContext(AuthContext);
  console.log(saif);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;

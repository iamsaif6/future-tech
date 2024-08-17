import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { Toaster } from 'react-hot-toast';
import { Footers } from '../Components/Footers';

const Main = () => {
  return (
    <div>
      <Toaster />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footers></Footers>
    </div>
  );
};

export default Main;

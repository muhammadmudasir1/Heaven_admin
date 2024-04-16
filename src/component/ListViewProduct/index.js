import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Tabbar from '../Landingpage/Tabbar';

const ProductListView = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {!isMobile &&  <Tabbar />}
    <Outlet />
    </>
  )
}

export default ProductListView
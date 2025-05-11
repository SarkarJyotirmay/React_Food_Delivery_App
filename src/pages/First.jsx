import React, { useEffect, useState,  } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Loader from "../components/loader/Loader";

function First() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

    useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // You can adjust this time

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [location.pathname]); // Runs every time route changes
  return (
    <>
      <Header />
      {loading ? <Loader /> : <Outlet />}
      <Footer />
    </>
  );
}

export default First;

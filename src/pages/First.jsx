import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Loader from "../components/loader/Loader";

function First() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default First;

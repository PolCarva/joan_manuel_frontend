import React from "react";
import Header from "../pages/Header"

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;

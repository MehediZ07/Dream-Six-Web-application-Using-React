import React from "react";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

export default function Header({ handleFreeCredit, count, notify }) {
  return (
    <div>
      <Navbar count={count}></Navbar>
      <Banner handleFreeCredit={handleFreeCredit} notify={notify}></Banner>
    </div>
  );
}

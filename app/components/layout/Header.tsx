import Image from "next/image";
import logo from "../../logo.svg";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-9000 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <Image src={logo} alt="" width={80} height={80} />
        <h1 className="text-4xl font-semibold ml-2">Rádio Diversidade</h1>
      </div>
    </header>
  );
};

export default Header;

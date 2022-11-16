import type {NextPage} from "next";
import Image from "next/image";

import logo from "../public/logo.svg";
import header from "../public/header.svg";
import footer from "../public/footer.svg";
import data from "../product/mock.json";
import {Product} from "../product/types";
const Home: NextPage = () => {
  const products = JSON.parse(JSON.stringify(data));

  return (
    <div className=" bg-black">
      <header className="header sticky top-0 flex items-center justify-between">
        <div className="absolute top-0 mt-10 ml-52 pl-2">
          <Image alt="Basement" src={logo} />
          <button className="border-2 border-white rounded-full text-xl pt-2 pb-2 pl-8 pr-8 fixed right-0 ml-8 mr-80">
            CART(0)
          </button>
        </div>
        <div className="mx-auto mt-32 ">
          <Image alt="Basement Supply" src={header} />
          <hr className="border-1 border-white border-solid mx-auto mt-10" />
          <div className="relative flex overflow-x-hidden max-w-fit">
            <div className="text-4xl mt-3 animate-marquee truncate font-black">
              <span> A man can´t have enough basement. swag</span> -
              <span> A man can´t have enough basement. swag</span>
            </div>
          </div>
          <hr className="border-1 border-white border-solid w-full mt-3" />
        </div>
      </header>
      {/* <footer className="footer sticky bottom-0 flex items-center justify-between">
        <div className="mx-auto">
          <Image alt="Wear Everyday" src={footer} />
        </div>
      </footer> */}
    </div>
  );
};

export default Home;

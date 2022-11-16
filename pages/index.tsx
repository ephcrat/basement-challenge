import type {NextPage} from "next";
import Image from "next/image";

import logo from "../public/logo.svg";
import header from "../public/header.svg";
import footer from "../public/footer.svg";

const Home: NextPage = () => {
  return (
    <div className="h-full bg-black">
      <header className="header sticky top-0 flex items-center justify-between">
        <div className="fixed top-0 mt-10 ml-64 pl-2">
          <Image alt="Basement" src={logo} />
          <button className="border-2 border-white rounded-full text-xl pt-2 pb-2 pl-8 pr-8 fixed right-0 ml-8 mr-64">
            CART(0)
          </button>
        </div>
        <div className="mx-auto mt-32">
          <Image alt="Basement Supply" src={header} />
          <hr className="border-1 border-white border-solid w-full mt-10" />
          <h1 className="text-4xl mt-3 max-w-34  animate-marquee whitespace-nowrap">
            A man can´t have enough basement. swag - A man can´t have enough basement. swag
          </h1>
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

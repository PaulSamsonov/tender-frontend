import { useState } from "react";
import BalanceDropdown from "./BalanceDropdown";
import ConnectWallet from "./connect-wallet";

export default function Header() {
  const [activePopupMenu, setActivePopupMenu] = useState(false);

  return (
    <div className="bg-black z-10 inset-x-0 top-0 h-[71px] lg:h-[110px] flex items-center justify-between items-center">
      <div className="flex w-full c items-center justify-between max-w-[1400px] relative">
        <div
          className="w-[104px] block lg:w-[196px]"
          onClick={() => setActivePopupMenu(false)}
        >
          <a href="https://www.tender.fi/">
            <img src="/images/logo1.svg" alt="Tender Finance" />
          </a>
        </div>
        <div className="text-[#ADB5B3] hidden lg:flex justify-center font-normal text-base font-nova absolute top-[50%] left-[50%] translate__50">
          <a className="px-[15px] cursor-pointer hover:text-white" href="/">
            Dashboard
          </a>
          <a className="px-[15px] cursor-pointer hover:text-white" href="/earn">
            Earn
          </a>
          <a
            className="px-[15px] cursor-pointer hover:text-white"
            href="https://docs.tender.fi"
          >
            Docs
          </a>
          <a
            className="pl-[15px] cursor-pointer hover:text-white"
            href="https://discord.com/invite/aKZ8hDBvYG"
          >
            Community
          </a>
        </div>
        <div className="flex items-center">
          <BalanceDropdown />
          <ConnectWallet />

          <div
            className={`flex pt-[2px] pr-[2.6px] gap-[5px] lg:gap-[6px] lg:hidden header__burg ${
              activePopupMenu ? "active" : ""
            }`}
            onClick={() => setActivePopupMenu(!activePopupMenu)}
          >
            <span className="w-[17px] h-[1.3px]"></span>
            <span className="w-[17px] h-[1.3px]"></span>
            <span className="w-[10px] h-[1.3px]"></span>
          </div>
        </div>
        <div className={`aside__menu__wrap ${activePopupMenu ? "act" : ""}`}>
          <div
            className="aside__menu__bac"
            onClick={() => setActivePopupMenu(false)}
          ></div>
          <div className="aside__menu__container flex items-center justify-center absolute w-[100%] max-w-[350px] top-[0px] z-10 right-[0px] left-[auto] bg-black py-[20px] px-[40px]">
            <div className="relative flex justify-center items-center flex-col text-[#ADB5B3] font-nova-400 text-xl translate-y-[-45px]">
              <a
                className="mb-[20px] font-nova text-white text-[18px] cursor-pointer"
                href="/"
              >
                Dashboard
              </a>
              <a
                className="mb-[20px] font-nova text-white text-[18px] cursor-pointer"
                href="/earn"
              >
                Earn
              </a>
              <a
                className="mb-[20px] font-nova text-white text-[18px] cursor-pointer"
                href="https://docs.tender.fi"
              >
                Docs
              </a>
              <a
                className="font-nova text-[18px] text-white cursor-pointer"
                href="https://discord.com/invite/Tender-Fi"
              >
                Community
              </a>
            </div>
            <div className="absolute left-[50%] bottom-[20px] translate-x-[-50%]">
              <ConnectWallet inMenu={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

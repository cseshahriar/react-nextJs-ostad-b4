import React from "react";

const SummaryTemp = () => {
  return (
    <div className="min-w-[350px] w-full min-h-[235px] rounded-[25px] bg-gradient-to-r from-[#FFF] to-[#FFF] via-[#FFF] flex flex-col text-black">
      <div className="flex flex-col p-6 gap-8">
        <div className="inline-flex justify-between items-center">
          <p className="inline-flex flex-col">
            <span className="text-[12px] font-normal leading-normal">
              Balance
            </span>
            <span className="text-[20px] font-semibold leading-normal">
              $5,756
            </span>
          </p>
          <img src="./Chip.png" alt="" />
        </div>
        <div className="flex justify-around">
          <div className="inline-flex flex-col ">
            <span className="text-white/70 text-[12px] font-normal leading-normal">
              CARD HOLDER
            </span>
            <span className="text-[15px] font-semibold leading-normal">
              Eddy Cusuma
            </span>
          </div>
          <div className="inline-flex flex-col ">
            <span className="text-white/70 text-[12px] font-normal leading-normal">
              VALID THRU
            </span>
            <span className="text-[15px] font-semibold leading-normal">
              12/22
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-b-[25px] bg-gradient-to-b from-white/15 to-white/0 flex justify-between items-center py-[22px] px-6">
        <p className="font-semibold text-[22px]">3778 **** **** 1234</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="30"
          viewBox="0 0 44 30"
          fill="none"
        >
          <circle cx="15" cy="15" r="15" fill="#9199AF80" fillOpacity="0.5" />
          <circle cx="29" cy="15" r="15" fill="#9199AF80" fillOpacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default SummaryTemp;

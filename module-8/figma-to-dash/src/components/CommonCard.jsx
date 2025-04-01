import React from "react";

const CommonCard = ({ title = "Title", children }) => {
  return (
    <div className="flex justify-start gap-[18px] flex-col">
      <h1 className="text-[#343C6A] text-[22px] font-semibold leading-normal">
        {title}
      </h1>
      <div className="md:rounded-3xl md:bg-[#FFF] p-4 flex-1">{children}</div>
    </div>
  );
};

export default CommonCard;

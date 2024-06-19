import React from "react";

const Heroimage = () => {
  return (
    <div className="h-[340px]   w-[100%] overflow-hidden relative conntainer">
      <div className="item w-full h-[100%] absolute inset-0 z-[1] ">
        <img
          className="w-full h-full object-cover filter brightness-50"
          src="https://images.unsplash.com/photo-1568983268695-74a04650c8b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByZXNlbnRhdGlvbnxlbnwwfDB8MHx8fDA%3D"
          alt=""
        />
        <div className="content absolute top-20 md:top-32 w-[1140px] max-w-[80%] left-1/2 transform -translate-x-1/2 box-border text-white text-shadow-[0_5px_10px_#0004]">
          <div className="title text-[4em] font-bold leading-[1.3em]">
            Author Guidlines
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;

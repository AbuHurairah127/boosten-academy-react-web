import React from "react";

const Button = (props) => {
  const { label, event } = props;
  return (
    <div className=" w-fit">
      <button
        onClick={event}
        className={`w-fit outline-none text-xl tracking-wider bg-[#f5843e] border-2 border-[#f5843e] rounded-md px-8 py-1 text-white transition-all delay-75 ease-in-out duration-500 hover:bg-transparent  focus:ring-4 focus:ring-[#f7b085bb] hover:text-[#db6922]`}
        style={{ fontFamily: "work sans" }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;

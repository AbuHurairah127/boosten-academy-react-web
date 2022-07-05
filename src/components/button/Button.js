import React from "react";

const Button = (props) => {
  const { label } = props;
  console.log(label);
  return (
    <div className=" w-fit">
      <button
        className="w-fit outline-none text-xl tracking-wider bg-[#f5843e] border-2 border-[#f5843e] rounded-md px-8 py-1 text-white transition-all delay-75 ease-in-out duration-500 hover:bg-transparent  focus:ring-4 focus:ring-[#f7b085bb] "
        style={{ fontFamily: "work sans" }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
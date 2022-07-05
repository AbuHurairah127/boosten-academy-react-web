import React from "react";

const ClassesCard = (props) => {
  return (
    <div
      className="mb-8 w-[90vw] md:w-[35vw] 2xl:w-[25vw] bg-slate-700 md:h-[35vh] lg:h-[65vh] flex flex-col items-center justify-evenly rounded-lg"
      style={{
        fontFamily: "work sans",
      }}
    >
      <div className="cardHeader mx-auto my-10">
        <h1
          className="text-[#F9995D] text-6xl text-center "
          style={{
            fontFamily: "work sans",
          }}
        >
          {props.data.class}
          <sup>{props.data.sup}</sup>
          {props.data.extClsTxt}
        </h1>
      </div>
      <h1 className="text-white font-semibold text-3xl pb-5 md:pb-0">
        Subjects
      </h1>
      <div className="classesInformation pb-5 md:pb-0">
        {props.data.subjects.map((item, index) => (
          <p className="text-white text-center text-lg" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ClassesCard;

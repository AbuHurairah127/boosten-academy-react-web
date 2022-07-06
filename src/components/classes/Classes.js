import React from "react";
import { classes } from "../../constantData/Data";
import ClassesCard from "./classesCard/ClassesCard";

const Classes = () => {
  return (
    <div className="max-w-screen h-fit bg-[#E0E3EB]" id="classes">
      <div className="classesHeading pt-5">
        <h1
          className="text-4xl text-center font-semibold"
          style={{
            fontFamily: "work sans",
          }}
        >
          Classes
        </h1>
        <div className="cardContainer flex flex-wrap justify-evenly mt-10">
          {classes.map((item, index) => (
            <ClassesCard data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;

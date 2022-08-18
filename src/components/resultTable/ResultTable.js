import React from "react";
import { useSelector } from "react-redux";
import { marks } from "./../../constantData/Data";
import Attendance from "../attendance/Attendance";
import { Table, Thead, Tbody, Tr, Td } from "react-super-responsive-table";
const ResultTable = () => {
  const isAuthenticated = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  const user = useSelector((store) => store.authReducer.cUser);
  return (
    <div className="w-screen flex flex-col items-center justify-evenly overflow-none">
      <div className="w-screen min-h-max">
        {isAuthenticated && (
          <div className="w-[90vw] text-center">
            <span className="font-bold text-lg block md:inline ">
              Name: <span className="font-normal ">{user.name}</span>
            </span>
            <span className="font-bold text-lg md:pl-4 block md:inline ">
              Father's Name:{" "}
              <span className="font-normal ">{user.fatherName}</span>
            </span>
            <span className="font-bold text-lg md:pl-4 block md:inline">
              Roll No.: <span className="font-normal ">{user.rollNo}</span>
            </span>
            <span className="font-bold text-lg md:pl-4 block md:inline">
              Class: <span className="font-normal ">{user.class}</span>
            </span>
          </div>
        )}
      </div>
      <h1 className="text-4xl font-bold py-5">Attendance</h1>
      <div className="max-w-[100vw]">
        <Attendance />
      </div>
      <h1 className="text-4xl font-bold py-5">Result</h1>
      <Table className="max-w-[90vw]">
        <Thead className="bg-gray-800">
          <Tr>
            <Td
              className="text-[#F9995D] py-2 md:text-center text-xl"
              style={{ fontFamily: "work sans" }}
            >
              Test No.
            </Td>
            {marks.map((item, index) => (
              <Td
                key={index}
                className="text-white py-2 md:text-center text-xl"
                style={{ fontFamily: "work sans" }}
              >
                {item.sub}
              </Td>
            ))}
          </Tr>
        </Thead>
        <Tbody className="w-full">
          <Tr className="py-2 bg-gray-200 border-y-2 border-gray-900">
            <Td className="text-center py-2">Test No. {1}</Td>
            {marks.map((item, i) => (
              <Td className="text-center py-2" key={i}>
                {item.marks}
              </Td>
            ))}
          </Tr>
          <Tr>
            <Td className="text-center py-2">Test No. {2}</Td>
            {marks.map((item, i) => (
              <Td className="text-center py-2" key={i}>
                {item.marks}
              </Td>
            ))}
          </Tr>
          <Tr className="py-2 bg-gray-200 border-y-2 border-gray-900">
            <Td className="text-center py-2">Test No. {3}</Td>
            {marks.map((item, i) => (
              <Td className="text-center py-2" key={i}>
                {item.marks}
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};

export default ResultTable;

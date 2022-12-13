import React, { useState } from "react";
import { useSelector } from "react-redux";
import Attendance from "../attendance/Attendance";
import { Table, Thead, Tbody, Tr, Td } from "react-super-responsive-table";
const ResultTable = () => {
  const isAuthenticated = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  const user = useSelector((store) => store.authReducer.cUser);
  const userMarks = useSelector((store) => store.authReducer.cUserMarks);
  const userSubjects = useSelector((store) => store.authReducer.cUserSubjects);
  const [obtainedMarksSum, setObtainedMarksSum] = useState(0);
  const [totalMarksSum, setTotalMarksSum] = useState(0);
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
      {userMarks.length > 0 ? (
        <Table className="max-w-[90vw] my-8">
          <Thead className="bg-gray-800">
            <Tr>
              <Td
                className="text-[#F9995D] py-2 md:text-center w-32"
                style={{ fontFamily: "work sans" }}
              >
                Test No.
              </Td>
              {userSubjects.map((item, index) => (
                <Td
                  key={index}
                  className=" md:text-white  md:text-center w-32"
                  style={{ fontFamily: "work sans" }}
                >
                  {item}
                </Td>
              ))}
              <Td
                className="text-[#F9995D] py-2 md:text-center w-32"
                style={{ fontFamily: "work sans" }}
              >
                Obtained Marks
              </Td>
              <Td
                className="text-[#F9995D] py-2 md:text-center w-32"
                style={{ fontFamily: "work sans" }}
              >
                Total Marks
              </Td>
            </Tr>
          </Thead>
          <Tbody className="w-full">
            {userMarks.map((item, i) => {
              return (
                <Tr
                  key={i}
                  className="py-2 bg-gray-200 border-y-2 border-gray-900"
                >
                  <Td className="text-center py-2">Test No. {item.testNo}</Td>
                  {userSubjects.map((subject, i) => {
                    return (
                      <Td className="text-center py-2" key={i}>
                        {item.obtainedMarks[subject]}/{item.totalMarks[subject]}
                      </Td>
                    );
                  })}
                  <Td className="text-center py-2">
                    {userSubjects.map((subject, i) => {
                      return;
                    })}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      ) : (
        <div className="my-8">
          <span className="text-xl font-semibold">
            No result uploaded on the portal!
          </span>
        </div>
      )}
    </div>
  );
};

export default ResultTable;

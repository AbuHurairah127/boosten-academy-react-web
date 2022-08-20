import React from "react";
import { useSelector } from "react-redux";
import {
  PieChart,
  ResponsiveContainer,
  Cell,
  Pie,
  Legend,
  LabelList,
} from "recharts";

const Attendance = () => {
  const presents = useSelector((store) => store.authReducer.noOfPresentDays);
  const absents = useSelector((store) => store.authReducer.noOfAbsents);
  const totalDays = useSelector((store) => store.authReducer.totalDays);
  let attendanceData = [
    { name: "Presents", value: presents },
    { name: "Absents", value: absents },
  ];

  const COLORS = ["#28a264", "#dc3b37"];
  return (
    <div>
      <ResponsiveContainer minWidth={200} height={200}>
        <PieChart width={80} height={80}>
          <Legend iconType="line" />
          <Pie data={attendanceData} labelLine={false} dataKey="value">
            <LabelList dataKey="value" />
            {attendanceData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="w-screen text-center">
        <span
          className={
            (presents / totalDays) * 100 > 49
              ? "text-green-500 font-bold text-xl"
              : "text-red-500 font-bold text-xl"
          }
        >
          {parseInt((presents / totalDays) * 100)} <span>% Attendance</span>{" "}
        </span>
      </div>
    </div>
  );
};

export default Attendance;

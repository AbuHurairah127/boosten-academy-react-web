import React from "react";
import { PieChart, ResponsiveContainer, Cell, Pie, Legend } from "recharts";

const Attendance = () => {
  const data01 = [
    { name: "Presents", value: 400 },
    { name: "Absents", value: 300 },
  ];
  const COLORS = ["#dc3b37", "#28a264"];
  return (
    <div className=" max-w-[100vw] bg-red-200">
      <ResponsiveContainer>
        <PieChart width={400} height={400}>
          <Legend />
          <Pie data={data01} dataKey="value" fill="#8884d8" label>
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Attendance;

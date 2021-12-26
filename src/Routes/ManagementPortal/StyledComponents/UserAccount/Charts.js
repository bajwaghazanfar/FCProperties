import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const data = [
    {
      month: "January",

      dAmount: 5000,
      Amount: 10000,
    },
    {
      month: "Febuary",
      dAmount: 3000,
      Amount: 2210,
    },
    {
      month: "March",
      dAmount: 2500,
      Amount: 5000,
    },
    {
      month: "April",

      dAmount: 6000,
      Amount: 9000,
    },
    {
      month: "May",

      dAmount: 8000,
      Amount: 20000,
    },
    {
      month: "June",

      dAmount: 12000,
      Amount: 2500,
    },
    {
      month: "July",

      dAmount: 2000,
      Amount: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Amount"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" stroke="#82ca9d" dataKey="Amount" />
        <Line type="monotone" stroke="#82ca9d" dataKey="dAmount" />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default Charts;

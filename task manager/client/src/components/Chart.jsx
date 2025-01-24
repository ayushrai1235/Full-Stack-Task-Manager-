import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  Rectangle,
  XAxis,
  YAxis,
} from "recharts";
import { chartData } from "../assets/dummydata.js";

export const Chart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart width={150} height={40} data={chartData}>
        <XAxis dataKey='name' />
        <YAxis dataKey='total'/>
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray='3 3' />
        <Bar dataKey='total' fill='#8884d8' activeBar = {<Rectangle fill="pink" stroke="blue" />} />
      </BarChart>
    </ResponsiveContainer>
  );
};
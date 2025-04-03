"use client";

import {data} from "./data/support-tickets-data"
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";

export default function SupportTicketResolved() {
  return (
   <ResponsiveContainer height={350} width="100%">
       <LineChart data={data}>
           <CartesianGrid strokeDasharray="3" />
           <XAxis fontSize={12} dataKey="name" stroke="#888888"/>
           <YAxis fontSize={12} stroke="#888888"/>
           <Line type="monotone" dataKey="delta" stroke="#84cc16"/>
           <Line type='monotone' dataKey="alpha" stroke="#3b82f6"/>
           <Line type="monotone" dataKey="canary" stroke="#f97316"/>
       </LineChart>

   </ResponsiveContainer>
  );
}
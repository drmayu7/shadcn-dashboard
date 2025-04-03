'use client';

import {data} from "./data"
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export default function WorkLocationTrends() {
    return(
        <ResponsiveContainer width="100%" height={350}>
            <BarChart
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                    <Tooltip />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12}/>
                    <YAxis stroke="#888888" fontSize={12} />
                    <Bar dataKey="office" stackId={1} fill="#4338ca" />
                    <Bar dataKey="wfh" stackId={1} fill="#6b7280" radius={[4,4,0,0]} />
                </BarChart>
            </ResponsiveContainer>
    )
}
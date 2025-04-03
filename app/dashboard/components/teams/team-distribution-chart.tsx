'use client';
import {data} from "./data-pie";
import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";


export default function TeamDistributionChart() {
    return (
        <ResponsiveContainer width="100%" height={150}>
            <PieChart>
                <Tooltip
                    labelClassName="font-bold text-lg"
                    // arbitary tailwind class names using []
                    wrapperClassName="dark:[&_.recharts-tooltip-item]:!text-white [&_.recharts-tooltip-item]:!text-black !text-sm rounded-md dark:!bg-black dark:!border-border" />
                <Pie data={data} dataKey="value" nameKey="name">
                    {data.map((dataItem,i) => (
                        <Cell key={i} fill={dataItem.color}/>
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}
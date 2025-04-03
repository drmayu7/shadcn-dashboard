'use client';

import {data} from "./data/data"
import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export default function WorkLocationTrends() {
    return(
        <ResponsiveContainer width="100%" height={350}>
            <BarChart
                data={data}
                margin={
                {
                    top: 20,
                    right: 10,
                    left: 0,
                    bottom: 5,
                }
            }
                className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
                >
                    <Tooltip
                        separator=": "
                        formatter={(value, name) => {
                            switch(name) {
                                case 'wfh':
                                    return [value, 'Work from home'];
                                case 'office':
                                    return [value, 'Work from office'];
                                default:
                                    return [value, name];
                            }
                        }}
                        labelClassName="font-bold text-lg"
                        wrapperClassName="!text-sm rounded-md dark:!bg-black dark:!border-border"/>
                    <Legend iconType="circle" verticalAlign="top" align="right"
                    formatter={
                        (value)=> {
                        if (value === "wfh"){
                            return <span className="text-sm">Work from home</span>
                    } else if (value === "office") {
                            return <span className="text-sm">Work from office</span>
                    }}
                    }
                    />
                    <XAxis dataKey="name" stroke="#888888" fontSize={12}/>
                    <YAxis stroke="#888888" fontSize={12} />
                    <Bar dataKey="office" stackId={1} fill="#4f46e5" />
                    <Bar dataKey="wfh" stackId={1} fill="#a5b4fc" radius={[4,4,0,0]} />
                </BarChart>
            </ResponsiveContainer>
    )
}
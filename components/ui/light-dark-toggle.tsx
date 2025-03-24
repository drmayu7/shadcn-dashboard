"use client"

import { useState } from 'react'
import {TooltipProvider, TooltipTrigger, Tooltip, TooltipContent} from "./tooltip";
import { MoonIcon,SunIcon } from "lucide-react";

export default function LightDarkToggle() {
    const[isDarkMode,setIsDarkMode] = useState(true)

    return(
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger onClick={()=>{
                        setIsDarkMode(prevState => !prevState)
                    }}>
                        {isDarkMode ? <MoonIcon/> : <SunIcon/>}
                    </TooltipTrigger>
                    <TooltipContent>
                        {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
    )
}
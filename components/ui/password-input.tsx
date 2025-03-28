'use client';

import * as React from "react"

import { Input } from "./input"

import { cn } from "@/lib/utils"
import {EyeIcon, EyeOffIcon} from "lucide-react";

function PasswordInput({ className, type, ...props }: React.ComponentProps<"input">) {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className="relative">
            <Input type={showPassword ? "text" : "password"} {...props} className={cn("pr-10",className)}/>
            <span className="absolute top-[8px] right-[10px] cursor-pointer select-none">
                {showPassword ? <EyeIcon className='size-[20px]' onClick={()=> setShowPassword(false)} />
                                : <EyeOffIcon className='size-[20px]' onClick={()=> setShowPassword(true)} />}
            </span>
        </div>
    )
}

export { PasswordInput }
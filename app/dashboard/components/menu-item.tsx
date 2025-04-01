"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";

type Props = {
    children : React.ReactNode,
    href : string;
}

export default function MenuItem({ children,href } : Props){
    const pathname = usePathname();
    const isActive = pathname === href; //check if the current path matches the href
    return <Link className={cn(
        "block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground",
        isActive &&
            "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-foreground text-foreground"
        )} href={href}>{children}</Link>
}
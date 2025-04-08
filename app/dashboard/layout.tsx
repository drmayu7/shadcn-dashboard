'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import {Drawer, DrawerContent, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";
import {MenuIcon} from "lucide-react";
import {useMediaQuery} from "@/hooks/use-media-query";


export default function DashboardLayout({children}: {children: React.ReactNode}){
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        <div className="md:grid grid-cols-[250px_1fr] h-screen">
            <MainMenu className="hidden md:flex"/>
            {/*Mobile view*/}
            {!isDesktop && (
                <div
                    className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
                    <MenuTitle/>
                    <Drawer direction="right">
                        <DrawerTrigger>
                            <MenuIcon/>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerTitle hidden>MyHarmony Mobile Menu</DrawerTitle>
                            <MainMenu/>
                        </DrawerContent>
                    </Drawer>
                </div>
            )}

            {/*Desktop view*/}
            <div className="overflow-auto py-2 px-4">
                <div className="flex gap-2 items-center py-4">
                    <h1>Welcome back, Dr. Naufal!</h1>
                    <Avatar className="size-10 ml-auto">
                        <AvatarImage
                            src="https://avatars.githubusercontent.com/u/117550441?u=917a81a96381634b38218c0191ab67970e6776ed&v=4&size=64"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                {children}
            </div>
        </div>
    )
}
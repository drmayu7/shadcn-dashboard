import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import Link from "next/link";
import LightDarkToggle from "@/components/ui/light-dark-toggle";

export default function MainMenu(){
    return(
        <div className="bg-muted overflow-auto p-4 flex flex-col">
            <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
                <MenuTitle />
            </div>
            <div className="py-4 grow">
                <MenuItem href="/dashboard">My Dashboard</MenuItem>
                <MenuItem href="/dashboard/teams">Teams</MenuItem>
                <MenuItem href="/dashboard/staff">Staff</MenuItem>
                <MenuItem href="/dashboard/account">Account</MenuItem>
                <MenuItem href="/dashboard/settings">Settings</MenuItem>
            </div>
            <div className="flex gap-2 items-center">
                <Avatar>
                    <AvatarFallback className="bg-indigo-300 dark:bg-indigo-800">MN</AvatarFallback>
                </Avatar>
                <Link href="/" className="hover:underline">Logout</Link>
                <LightDarkToggle />
            </div>
        </div>
    )
}
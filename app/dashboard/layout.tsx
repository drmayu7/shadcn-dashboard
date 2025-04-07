import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";


export default function DashboardLayout({children}: {children: React.ReactNode}){
    return (
        <div className="grid md:grid-cols-[250px_1fr] h-screen">
            <MainMenu className="hidden md:flex"/>
            {/*Mobile view*/}
            <div className="p-4 block md:hidden sticky top-0 left-0 bg-background border-b border-border">
                <MenuTitle />
            </div>

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
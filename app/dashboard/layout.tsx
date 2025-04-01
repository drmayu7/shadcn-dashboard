import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MainMenu from "./components/main-menu";


export default function DashboardLayout({children}: {children: React.ReactNode}){
    return (
        <div className="grid grid-cols-[250px_1fr] h-screen">
            <MainMenu />
            <div className="overflow-auto py-2 px-4">
                <div className="flex gap-2 items-center">
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
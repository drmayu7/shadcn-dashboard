import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {
    AlertTriangleIcon,
    BadgeCheckIcon, LaptopIcon,
    PartyPopperIcon,
    UserCheck2Icon,
    UserIcon,
    UserRoundXIcon
} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import cm from '@/public/images/cm.jpg'
import WorkLocationTrends from "./work-location-trends";

export default function StaffStats() {
    const totalEmployees = 20;
    const staffPresent = 20;
    const percentageEmployeesPresent = parseFloat(((staffPresent / totalEmployees) * 100).toFixed(2));

    return(
        <>
            <div className="grid lg:grid-cols-3 gap-4">
                <Card className="gap-0">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                            Total Staff
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <UserIcon/>
                            <div className="text-5xl font-bold">{totalEmployees}</div>
                        </div>
                        <div>
                            <Button size="xs" asChild>
                                <Link href="/dashboard/staff">
                                    View All
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className="gap-0">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                            Staff Present
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="mb-4">
                        <div className="flex gap-2">
                            {percentageEmployeesPresent > 75 ? (
                                <UserCheck2Icon/>) : (<UserRoundXIcon/>)}

                            <div className="text-5xl font-bold">{staffPresent}</div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 mt-auto">
                        {percentageEmployeesPresent > 75 ? (
                            <span className="text-xs text-green-500 flex gap-1 items-center">
                            <BadgeCheckIcon/>
                                {percentageEmployeesPresent}% of employees are present
                        </span>
                        ) : (
                            <span className="text-xs text-red-500 flex gap-1 items-center">
                            <AlertTriangleIcon/>
                                Only {percentageEmployeesPresent}% of employees are present
                        </span>
                        )}

                    </CardFooter>
                </Card>
                <Card className="border-pink-500 flex flex-col gap-0">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                            Staff of the month
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex gap-2 items-center">
                        <Avatar>
                            <Image src={cm} alt="employee of the month avatar"/>
                            <AvatarFallback>
                                CM
                            </AvatarFallback>
                        </Avatar>
                        <span className="text-2xl">Collin Murray!</span>
                    </CardContent>
                    <CardFooter className='flex gap-2 items-center text-xs text-muted-foreground mt-auto'>
                        <PartyPopperIcon className="text-pink-500"/>
                        <span>Congratulations, Colin!</span>
                    </CardFooter>
                </Card>
            </div>
            <div className="my-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <LaptopIcon />
                        <span>Employee work location trends</span>
                    </CardTitle>
                    <CardContent>
                        <WorkLocationTrends />
                    </CardContent>
                </CardHeader>
            </Card>
            </div>
        </>
    )
}
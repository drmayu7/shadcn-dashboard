import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {UserIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function StaffStats() {
    return(
        <div className="grid lg:grid-cols-3 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">
                        Total Staff
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <UserIcon />
                        <div className="text-5xl font-bold">1000</div>
                    </div>
                    <div>
                        <Button size="sm" asChild>
                            <Link href="/dashboard/staff">
                                View All
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-base">
                        Staff Present
                    </CardTitle>
                </CardHeader>
            </Card>
            <Card className="border-pink-500">
                <CardHeader>
                    <CardTitle className="text-base">
                        Staff of the month
                    </CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}
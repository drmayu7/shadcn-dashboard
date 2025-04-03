import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ListChecksIcon, PieChartIcon, StarIcon, UsersIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {Avatar,AvatarFallback} from "@/components/ui/avatar";
import {teamLeaders} from "./data/teamLeaders";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import TeamDistributionChart from "./team-distribution-chart";
import SupportTicketResolved from "./support-ticket-resolved";

export default function TeamStats() {

    return(
        <>
            <div className="grid lg:grid-cols-3 gap-4">
                <Card className="gap-0">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                            Total teams
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <UsersIcon/>
                            <div className="text-5xl font-bold">8</div>
                        </div>
                        <div>
                            <Button size="xs" asChild>
                                <Link href="/dashboard/teams">
                                    View All
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className="gap-0">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base flex justify-between items-center">
                            <span>Team leaders</span>
                            <StarIcon className="text-yellow-200" />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {teamLeaders.map(teamLeaders => (
                            <TooltipProvider key={teamLeaders.id}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Avatar>
                                            {!!teamLeaders.avatar &&
                                            <Image src={teamLeaders.avatar} alt={`${teamLeaders.firstName} ${teamLeaders.lastName} avatar`} />
                                            }
                                            <AvatarFallback>
                                                {teamLeaders.firstName[0]}
                                                {teamLeaders.lastName[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        {teamLeaders.firstName} {teamLeaders.lastName}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base flex justify-between items-center">
                            <span>Team distribution</span>
                            <PieChartIcon />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-0">
                        <TeamDistributionChart />
                    </CardContent>
                </Card>
            </div>
            <div className="my-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <ListChecksIcon/>
                            <span>Support tickets resolved</span>
                        </CardTitle>
                        <CardContent className="pl-0">
                            <SupportTicketResolved />
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}
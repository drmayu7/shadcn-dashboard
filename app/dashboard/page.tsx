import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import StaffStats from "./components/staff-stats";

export default function DashboardPage(){
    return (
        <Tabs defaultValue="staff">
            <TabsList className="mb-4">
                <TabsTrigger value='staff'>Staff stats</TabsTrigger>
                <TabsTrigger value='teams'>Team stats</TabsTrigger>
            </TabsList>
            <TabsContent value="staff">
                <StaffStats />
                </TabsContent>
            <TabsContent value="teams">teams stats view</TabsContent>
        </Tabs>
    )
}
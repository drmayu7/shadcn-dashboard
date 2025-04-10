import { staff } from "../components/staff/data/data-table"
import { setTimeout } from "timers/promises";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {DataTable} from "@/components/ui/data-table";
import {columns} from "./columns";

export default async function StaffPage(){
    await setTimeout(5000);
    return(
        <Card>
            <CardHeader>
                <CardTitle> Staff </CardTitle>
            </CardHeader>
            <CardContent>
                <DataTable columns={columns} data={staff}/>
            </CardContent>
        </Card>
    )
}
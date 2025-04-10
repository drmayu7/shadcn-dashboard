"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Staff = {
    id: number,
    firstName: string,
    lastName: string,
    teamName: string,
    isTeamLeader: boolean,
    avatar?: string,
}

export const columns: ColumnDef<Staff>[] = [
    {
        accessorKey: "avatar",
        header: "",
    },
    {
        accessorKey: "firstName",
        header: "First Name",
    },
    {
        accessorKey: "lastName",
        header: "Last Name",
    },
    {
        accessorKey: "teamName",
        header: "Team Name",
    },
    {
        accessorKey: "isTeamLeader",
        header: "",
    },
]

"use client";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BrainIcon } from "lucide-react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";


const accountTypes = [
    { value: 'MOH', label: 'Ministry of Health' },
    { value: 'Private', label: 'Private Facilities' },
    { value: 'Army', label: 'Army Facilities' },
    // Add more options as needed
] as const;

const accountTypeValues = accountTypes.map(type => type.value);

// Ensure the array is not empty
if (accountTypeValues.length === 0) {
    throw new Error("accountTypeValues must have at least one value");
}

const accountTypeEnum = z.enum([accountTypeValues[0], ...accountTypeValues.slice(1)]);

const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
    accountType: accountTypeEnum,
    facilityName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(),
});

export default function SignupPage(){

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email: ''
        }
    });

    const handleSubmit = () => {
        console.log('login validation passed');
    }

    return(
        <>
            <BrainIcon size={50} />
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>
                        Sign up
                    </CardTitle>
                    <CardDescription>
                        Sign up for a MyHarmony account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                            <FormField control={form.control}
                                       name="email"
                                       render={
                                            ({field})=> (
                                           <FormItem>
                                               <FormLabel>
                                                   Email
                                               </FormLabel>
                                               <FormControl>
                                                   <Input
                                                       placeholder='naufal.nordin@moh.gov.my'
                                                       {...field}/>
                                               </FormControl>
                                               <FormMessage />
                                           </FormItem>
                                       )}/>
                            <FormField control={form.control} name="accountType" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Account type</FormLabel>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder='Select an account type' />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {accountTypes.map((type) => (
                                                <SelectItem key={type.value} value={type.value}>
                                                    {type.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <Button type="submit">Sign up</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="justify-between">
                    <small>Already have an account?</small>
                    <Button asChild variant='outline' size='sm'>
                        <Link href="/login">
                            Login
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
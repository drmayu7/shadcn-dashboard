"use client";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {BrainIcon, CalendarIcon} from "lucide-react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import { toast } from "sonner"
import {Calendar} from "@/components/ui/calendar";

const accountTypes = [
    { value: 'Public', label: 'Ministry of Health' },
    { value: 'Private', label: 'Private Facilities' },
    { value: 'Army', label: 'Army Facilities' },
    { value: 'Institute', label: 'Institute/Universities' },
    // Add more options as needed
] as const;

const accountTypeValues = accountTypes.map(type => type.value);

// Ensure the array is not empty
if (accountTypeValues.length === 0) {
    throw new Error("accountTypeValues must have at least one value");
}

const accountTypeEnum = z.enum([accountTypeValues[0], ...accountTypeValues.slice(1)]);

const formSchema = z
    .object({
        email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
        accountType: accountTypeEnum,
        organizationName: z.string().min(1, { message: "Organization name is required" }).optional(),
        numberOfEmployees: z.coerce.number().optional(),
        dob: z.date().refine((date) => {
            const today = new Date();
            const eighteenYearsAgo = new Date(
                today.getFullYear() - 18,
                today.getMonth(),
                today.getDate()
            );
            return date <= eighteenYearsAgo;
        },'You must be at least 18 years old')
    })
    .superRefine((data, ctx) => {
        if (data.accountType === 'Private' && !data.organizationName) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['organizationName'],
                message: 'Organization name is required for private facilities',
            });
        }
        if (data.accountType === 'Private' && (!data.numberOfEmployees || data.numberOfEmployees < 0)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['numberOfEmployees'],
                message: 'Number of employees is required for private facilities',
            });
        }
    });


export default function SignupPage(){

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email: '',
            accountType: undefined,
            organizationName: '',
            // numberOfEmployees: null
        }
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        toast(
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
        );
        console.log('sign-up validation passed');
    };

    const accountType = form.watch('accountType')

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
                                                   Official Email
                                               </FormLabel>
                                               <FormControl>
                                                   <Input
                                                       placeholder='e.g naufal.nordin@moh.gov.my'
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
                            {accountType === 'Private' &&
                            <>
                                <FormField control={form.control}
                                           name="organizationName"
                                           render={
                                               ({field})=> (
                                                   <FormItem>
                                                       <FormLabel>
                                                           Organization Name
                                                       </FormLabel>
                                                       <FormControl>
                                                           <Input
                                                               placeholder='e.g CareClinics Sdn Bhd'
                                                               {...field}/>
                                                       </FormControl>
                                                       <FormMessage />
                                                   </FormItem>
                                               )}/>
                                <FormField control={form.control}
                                           name="numberOfEmployees"
                                           render={
                                               ({field})=> (
                                                   <FormItem>
                                                       <FormLabel>
                                                           Number of Employees
                                                       </FormLabel>
                                                       <FormControl>
                                                           <Input
                                                               placeholder='Please enter a number'
                                                               type='number'
                                                               min={0}
                                                               {...field}/>
                                                       </FormControl>
                                                       <FormMessage />
                                                   </FormItem>
                                               )}/>
                            </>
                            }
                                <FormField control={form.control}
                                           name="dob"
                                           render={
                                               ({field})=> (
                                                   <FormItem className="flex flex-col pt-2">
                                                       <FormLabel>
                                                           Date of Birth
                                                       </FormLabel>
                                                           <Popover>
                                                               <PopoverTrigger asChild>
                                                                    <FormControl>
                                                                        <Button variant='outline'
                                                                                className='normal-case flex justify-between pr-1'>
                                                                            <span>Pick a date</span>
                                                                            <CalendarIcon />
                                                                        </Button>
                                                                    </FormControl>
                                                               </PopoverTrigger>
                                                               <PopoverContent>
                                                                    <Calendar mode="single"
                                                                              defaultMonth={field.value}
                                                                              selected={field.value}
                                                                              onSelect={field.onChange}
                                                                              fixedWeeks
                                                                              weekStartsOn={1}
                                                                    />
                                                               </PopoverContent>
                                                           </Popover>
                                                       <FormMessage />
                                                   </FormItem>
                                               )}/>
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
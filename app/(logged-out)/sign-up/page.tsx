"use client";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {BrainIcon, CalendarIcon} from "lucide-react";

import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import { toast } from "sonner"
import {Calendar} from "@/components/ui/calendar";
import {format} from "date-fns";
import { PasswordInput } from "@/components/ui/password-input";
import {Checkbox} from "@/components/ui/checkbox";
import {useRouter} from "next/navigation";

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

const accountTypeSchema = z
    .object(
        {
            accountType: accountTypeEnum,
            organizationName: z.string().optional(),
            numberOfEmployees: z.coerce.number().optional(),
        }
    )
    .superRefine((data,ctx) => {
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
        }
    )

const passwordSchema = z
    .object({
        password: z
            .string()
            .min(8,"Password must contains at least 8 characters")
            .refine((password) => {
                return /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password);
            },"Password must contain at least 1 uppercase letter and 1 special character"),
        passwordConfirm: z.string()
    }
).superRefine((data,ctx) => {
        if(data.password !== data.passwordConfirm){
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['passwordConfirm'],
                message: 'Password confirmation do not match',
            })
        }
    })

const baseSchema = z
    .object({
        email: z.string().min(1,"Email is required").email( "Invalid email address" ),
        dob: z.date().refine((date) => {
            const today = new Date();
            const eighteenYearsAgo = new Date(
                today.getFullYear() - 18,
                today.getMonth(),
                today.getDate()
            );
            return date <= eighteenYearsAgo;
        },'You must be at least 18 years old'),
        acceptTerms: z
            .boolean(
            {required_error:'You must accept the terms and conditions'}
        )
            .refine(val => val, {
            message: "You must accept the terms and conditions",
        }),
    })

//Combine the schemas
const formSchema = baseSchema.and(passwordSchema).and(accountTypeSchema);

export default function SignupPage(){
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email: '',
            password: '',
            passwordConfirm: '',
            organizationName: '',
            // numberOfEmployees: '',
            // accountType: undefined,
            // organizationName: '',
            // numberOfEmployees: 0
        }
    });

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        toast(
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-slate-400">Sign-up validation passed</code>
                <br />
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
        );
        router.push("/login");
    };

    const accountType = form.watch('accountType')
    const dobFromDate = new Date();
    dobFromDate.setFullYear(dobFromDate.getFullYear() - 120);

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
                                                               {...field}
                                                               value={field.value ?? ""}
                                                           />
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
                                                                            {!!field.value ?
                                                                                format(field.value,"PPP") :
                                                                                <span>Pick a date</span>}
                                                                            <CalendarIcon />
                                                                        </Button>
                                                                    </FormControl>
                                                               </PopoverTrigger>
                                                               <PopoverContent align="start" className="w-auto p-0">
                                                                    <Calendar mode="single"
                                                                              defaultMonth={field.value}
                                                                              selected={field.value}
                                                                              onSelect={field.onChange}
                                                                              fixedWeeks
                                                                              weekStartsOn={1}
                                                                              fromDate={dobFromDate}
                                                                              toDate={new Date()}
                                                                              // disabled={[new Date('2025-03-24')]}
                                                                              // disabled={(date)=>{
                                                                              //       return date.getDay() === 0 || date.getDay() === 6
                                                                              // }}
                                                                              captionLayout="dropdown-buttons" // must have fromDate and toDate props
                                                                    />
                                                               </PopoverContent>
                                                           </Popover>
                                                       <FormMessage />
                                                   </FormItem>
                                               )}/>
                            <FormField control={form.control}
                                       name="password"
                                       render={
                                           ({field})=> (
                                               <FormItem>
                                                   <FormLabel>
                                                       Password
                                                   </FormLabel>
                                                   <FormControl>
                                                       <PasswordInput placeholder='••••••••••' {...field}/>
                                                   </FormControl>
                                                   <FormMessage />
                                               </FormItem>
                                           )}/>
                            <FormField control={form.control}
                                       name="passwordConfirm"
                                       render={
                                           ({field})=> (
                                               <FormItem>
                                                   <FormLabel>
                                                       Confirm password
                                                   </FormLabel>
                                                   <FormControl>
                                                       <PasswordInput placeholder='••••••••••' {...field}/>
                                                   </FormControl>
                                                   <FormMessage />
                                               </FormItem>
                                           )}/>
                            <FormField control={form.control}
                                       name="acceptTerms"
                                       render={
                                           ({field})=> (
                                               <FormItem>
                                                   <div className="flex gap-2 items-center">
                                                       <FormControl>
                                                           <Checkbox
                                                               checked={field.value}
                                                               onCheckedChange={field.onChange}/>
                                                       </FormControl>
                                                       <FormLabel>
                                                           I accept the terms and conditions
                                                       </FormLabel>
                                                   </div>
                                                    <FormDescription>
                                                         By signing up you agree to our{" "}
                                                        <Link href="/terms" className='text-primary hover:underline'>terms and conditions</Link>
                                                    </FormDescription>
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
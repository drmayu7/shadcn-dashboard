"use client";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BrainIcon } from "lucide-react";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const formSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
});

export default function LoginPage(){

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email: '',
            password: '',
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
                        Login
                    </CardTitle>
                    <CardDescription>
                        Login to your MyHarmony account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                            <FormField control={form.control}
                                       name="email"
                                       render={({field})=> (
                                <FormItem>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='naufal.nordin@moh.gov.my'
                                            {...field}/>
                                    </FormControl>
                                    <FormDescription>
                                        Enter your email address that you registered with MyHarmony
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                                       )}/>
                            <FormField control={form.control}
                                       name="password"
                                       render={({field})=> (
                                           <FormItem>
                                               <FormLabel>
                                                   Password
                                               </FormLabel>
                                               <FormControl>
                                                   <Input type='password'
                                                          placeholder='Enter your password'
                                                          {...field}/>
                                               </FormControl>
                                               <FormMessage />
                                           </FormItem>
                                       )}/>
                            <Button type="submit">Login</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="justify-between">
                    <small>Don&apos;t have an account?</small>
                    <Button asChild variant='outline' size='sm'>
                        <Link href="/sign-up">
                            Sign Up
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}
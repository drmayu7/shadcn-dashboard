"use client";
import {Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {BrainIcon} from "lucide-react";

export default function LoginPage(){
    return(
        <>
                <BrainIcon size={50}/>
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
                    Login Form
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
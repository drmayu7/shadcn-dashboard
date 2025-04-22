"use client";
import { useActionState, startTransition } from "react";
import { toast } from "sonner";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BrainIcon } from "lucide-react";
import {
    Form as ShadcnForm,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/components/actions/login-action";
import { loginSchema } from "@/lib/definitions";

const initialState = {
    loading: false,
    error: null as string | null,
};

type FormValues = z.infer<typeof loginSchema>;
type ActionState = typeof initialState;

export default function LoginPage() {
    const [state, formAction] = useActionState<
        ActionState,
        FormValues
    >(async (prevState, data) => {
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);

        try {
            const result = await login(formData);

            if (result?.errors) {
                return {
                    loading: false,
                    error: "Field validation errors occurred",
                };
            } else if (result?.server_validation_error) {
                return {
                    loading: false,
                    error: result.server_validation_error,
                };
            } else if (result?.server_error) {
                return {
                    loading: false,
                    error: result.server_error,
                };
            } else {
                toast("Login successful!");
                return { loading: false, error: null };
            }
        } catch (err) {
            console.error("Unexpected login error:", err);
            return {
                loading: false,
                error: "An unexpected error occurred. Please try again.",
            };
        }
    }, initialState);

    const form = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: { username: "", password: "" },
    });

    // Wrap the formAction call in startTransition to avoid the "outside of transition" warning
    const handleSubmit = form.handleSubmit((data) => {
        startTransition(() => formAction(data));
    });

    return (
        <>
            <BrainIcon size={50} />
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                <CardDescription>
                    Login to your MyHarmony account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ShadcnForm {...form}>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="youremail@domain.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {state.error && (
                            <p className="text-sm text-red-600">
                                {
                                    state.error === "LOGIN_BAD_CREDENTIALS"
                                    ? "Invalid username or password"
                                    : state.error
                                }
                            </p>
                        )}
                        <Button type="submit" disabled={state.loading} className="mt-2">
                            {state.loading ? "Logging in..." : "Login"}
                        </Button>
                    </form>
                </ShadcnForm>
            </CardContent>
            <CardFooter className="justify-between">
                <small>Don&apos;t have an account?</small>
                <Button asChild variant="outline" size="sm">
                    <Link href="/sign-up">Sign Up</Link>
                </Button>
            </CardFooter>
        </Card>
</>
);
}
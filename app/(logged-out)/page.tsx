import { Button } from "@/components/ui/button";
import { BrainIcon } from "lucide-react"; // Icon Library
import Link from "next/link";

export default function LandingPage(){
    return (
        <>
            <h1 className="flex gap-2 items-center">
                <BrainIcon size={50} className="text-indigo-600"/> MyHarmony
            </h1>
            <p>
                Revolutionizing unstructured data management in MyHDW using Natural Language Processing
            </p>
            <div className="flex gap-2 items-center">
                <Button asChild>
                    <Link href="/login">Log in</Link>
                </Button>
                <small>or</small>
                <Button asChild variant='outline'>
                    <Link href="sign-up">Sign Up</Link>
                </Button>
            </div>
        </>
    )
}
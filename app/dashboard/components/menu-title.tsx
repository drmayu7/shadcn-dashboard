import {BrainIcon} from "lucide-react";
import Link from "next/link";

export default function MenuTitle() {
    return(
        <h4 className="flex items-center gap-2">
            <Link href="dashboard" className="flex items-center gap-2">
                <BrainIcon size={40} className="text-primary" />
                MyHarmony
            </Link>
        </h4>
    )
}
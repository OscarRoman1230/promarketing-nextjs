import {twMerge} from "tailwind-merge";
import {ButtonHTMLAttributes} from "react";
import Link from "next/link";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    tButton: string
}

export function Button({children, className, tButton, href, ...props}: Props) {
    if (href) {
        return (
            <Link
                href={href}
                className={twMerge(tButton === 'primary' ? "bg-[#091B50] hover:bg-[#040F2EFF]" : "bg-amber-400 hover:bg-amber-500",
                    className, "btn"
                )}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={twMerge(
                tButton === 'primary' ? "bg-[#091B50] hover:bg-[#040F2EFF]" : "bg-amber-400 hover:bg-amber-500",
                className, "btn"
            )}
            {...props}
        >
            {children}
        </button>
    );
}
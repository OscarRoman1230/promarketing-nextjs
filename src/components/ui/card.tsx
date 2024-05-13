import React from "react";

interface Props {
    children: React.ReactNode;
}
export function Card ({children}: Props) {
    return <div className="bg-[#E0E4EF4D] rounded-[8px] px-14 py-2 w-full h-screen">
        {children}
    </div>
}
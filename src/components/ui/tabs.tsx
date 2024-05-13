"use client";

import React, {useState, useEffect, useRef} from 'react'
import {twMerge} from "tailwind-merge";

interface Item {
    title: string;
    content: React.ReactNode;
}

interface TabsComponentProps {
    items: Item[];
}

export function Tabs({items}: TabsComponentProps) {

    const [selectedTab, setSelectedTab] = useState<number>(0);
    const firstBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (firstBtnRef.current) {
            firstBtnRef.current.focus();
        }
    }, []);

    return (
        <div className="">
            <div className="mb-4">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center border-b border-[#E0E4EF]">
                    {
                        items.map((item: any, index: number) => {
                            return (
                                <li key={index} className="me-0" role="presentation">
                                    <button
                                        ref={index === 0 ? firstBtnRef : null}
                                        type="button"
                                        onClick={() => setSelectedTab(index)}
                                        className={twMerge("inline-block p-4 border-b-2 rounded-t-lg", selectedTab === index ? "border-[#091B50]" : "border-[#E0E4EF]")}
                                    >{item.title}</button>
                                </li>

                            )
                        })
                    }
                </ul>

            </div>
            <div className='bg-white p-2 rounded-xl'>
                {items.map((item, index) => (
                    <div key={index}
                         className={twMerge(`${selectedTab === index ? '' : 'hidden'}`, "p-4 rounded-lg bg-gray-50")}>
                        {item.content}
                    </div>
                ))}
            </div>
        </div>
    )
}
"use client";

import {Card} from "@/components/ui";
import {Poppins} from 'next/font/google'
import {twMerge} from "tailwind-merge";

const poppins = Poppins({
    weight: ["200", "400", "600"],
    style: ["italic", "normal"],
    subsets: ["latin"]
})

interface props {
    providers: [];
}

export default function FormCreateRequest({providers}: props) {
    let allCheck: boolean = true;
    return (
        <div>
            <form action="">
                <Card>
                    <h2 className="font-bold font">AUTOEXCLUSIÓN PROVEEDORES</h2>
                    <div className={twMerge("container mx-auto", poppins.className)}>
                        <div className="flex items-center me-4 my-2">
                            <input id="all-items" type="checkbox" value="all"
                                   className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 hover:border-amber-400 rounded focus:ring-yellow-500 focus:ring-2 checked:accent-amber-400"/>
                            <label htmlFor="all-items"
                                   className="ms-2 text-sm font-medium">Todos {allCheck}</label>
                        </div>
                        <hr/>
                        <div className="items-center grid grid-cols-7 gap-1 my-2">
                            {
                                providers.map((provider: any) => (
                                    <div key={provider.id} className="w-full sm:col-span-7 items-center me-4">
                                        <input checked={allCheck} id={provider.name} type="checkbox"
                                               value={provider.id}
                                               className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 hover:border-amber-400 rounded focus:ring-yellow-500 focus:ring-2 checked:accent-amber-400"/>
                                        <label htmlFor={provider.name}
                                               className="ms-2 text-sm font-medium">{provider.description}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Card>
            </form>
        </div>
    )
}
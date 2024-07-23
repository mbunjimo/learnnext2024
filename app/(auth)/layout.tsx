"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const navLinks = [
    { name: 'Register', href: '/register' },
    { name: 'login', href: '/login' },
    { name: 'Forgot password', href: '/forgot-password' },
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {


    // for activelinks 
    const pathname = usePathname();    


    return (
        <div>

            <div>
                <p className="text-3xl font-bold">This is the navbar</p>
                <ul>
                    {navLinks.map((links) => {
                        const isActive = pathname.startsWith(links.name)    
                        return (
                            <li className={ isActive ? `font-bold text-xl text-yellow-600 ` : ``  }>
                                <Link href={`${links.href}` } >{`${links.name}`}</Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>

            <div className="flex w-full p-8"> 
                {children}
            </div>

        </div>

    )
} 
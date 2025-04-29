"use client"
import { LogOut, Settings, User } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger } from './ui/sidebar'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const Header = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <header className={cn('p-4  max-h-16 flex items-center justify-between sticky top-0 z-10 transition', isScrolled ? "glassmorphism" : "bg-background")}>
            <SidebarTrigger className='focus-visible:ring-0' />
            <div className="flex items-center gap-4">
                <Link href={'/'}>Dashboard</Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className='cursor-pointer group'>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/44106906" className='group-hover:opacity-80 dark:group-hover:opacity-100' />
                            <AvatarFallback>AT</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10} className='mr-2'>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => router.push('/users/123')}>
                            <User className='size-[1.2rem] mr-2' />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings className='size-[1.2rem] mr-2' />
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuItem variant='destructive'>
                            <LogOut className='size-[1.2rem] mr-2' />
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

export default Header
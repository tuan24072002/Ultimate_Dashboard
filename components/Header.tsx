"use client"
import { LogOut, Moon, Settings, Sun, User } from 'lucide-react'
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
import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { SidebarTrigger } from './ui/sidebar'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const Header = () => {
    const { setTheme } = useTheme();
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
                <Button onClick={() => setTheme(theme => theme === 'dark' ? 'light' : 'dark')} variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 fill-amber-500" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 fill-amber-300" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
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
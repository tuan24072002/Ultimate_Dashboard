import CardList from '@/components/CardList'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    BadgeCheck,
    ContactRound,
    Shield,
    Trophy
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AppLineChart from '@/components/AppLineChart'

const page = () => {
    return (
        <div className="">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Tuấn Dev</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-4 flex flex-col xl:flex-row gap-6">
                <div className="w-full xl:w-1/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className='text-xl font-semibold'>User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className='fill-white dark:fill-blue-500/80 text-blue-600 dark:text-white' />
                                </HoverCardTrigger>
                                <HoverCardContent align='start'>
                                    <h1 className='font-bold mb-2'>Verified User</h1>
                                    <p className='text-sm text-muted-foreground'>This user has been verified by the admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield
                                        size={36}
                                        className="fill-white dark:fill-green-500/80 text-green-600 dark:text-white"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">
                                        Admin users have access to all features and can manage
                                        users.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Trophy
                                        size={36}
                                        className="text-yellow-500/80 dark:fill-white/10"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been awarded for their contributions.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <ContactRound
                                        size={36}
                                        className="dark:fill-orange-500/80 text-orange-600 dark:text-white"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been popular in the community.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className='text-xl font-semibold'>User Information</h1>
                            <EditUser />
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className='text-sm text-muted-foreground'>Profile completion</p>
                                <Progress value={66} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Username:</span>
                                <span>tuandev</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>name:</span>
                                <span>Tuấn Dev</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>email:</span>
                                <span>tuandev@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Phone:</span>
                                <span>+84 123 456 789</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Location:</span>
                                <span>District 4, HCMC</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Role:</span>
                                <Badge>Super Admin</Badge>
                            </div>
                        </div>
                        <p className='text-sm text-muted-foreground mt-4'>Joined on {new Date(Date.now()).getFullYear()}</p>
                    </div>
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title='Latest Transactions' />
                    </div>
                </div>
                <div className="w-full xl:w-2/3 space-y-6 h-fit flex flex-col">
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                        <div className="flex items-center gap-2">
                            <Avatar className='size-10'>
                                <AvatarImage src="https://avatars.githubusercontent.com/u/44106906" />
                                <AvatarFallback>AT</AvatarFallback>
                            </Avatar>
                            <h1 className='text-lg font-semibold'>Tuấn Dev</h1>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sit nemo et consequuntur maxime! Rerum, tenetur facere soluta cum asperiores autem eum modi praesentium, consectetur omnis consequatur enim iusto ducimus.
                        </p>
                    </div>
                    <div className="bg-primary-foreground p-4 rounded-lg flex-1">
                        <h1 className='text-xl font-semibold'>User Activity</h1>
                        <AppLineChart />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page
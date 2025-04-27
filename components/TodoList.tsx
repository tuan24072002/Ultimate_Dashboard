"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import { Calendar } from "./ui/calendar"
import { useState } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col h-full">
            <div className="grid grid-cols-2">
                <h1 className="text-lg font-medium mb-6">Todo List</h1>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button>
                            <CalendarIcon />
                            {
                                date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>
                            }
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-2 flex items-center justify-center">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={date => {
                                setDate(date);
                                setOpen(false);
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    {
                        Array.from({ length: 20 }).map((_, index) => (
                            <Card className="p-4" key={`todo-${index}`}>
                                <div className="flex items-center gap-4">
                                    <Checkbox id="item1" checked={Math.random() > 0.8} />
                                    <Label htmlFor="item1" className="text-sm text-muted-foreground line-clamp-2">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, maxime! Dolor quia quo, impedit repellendus iste et maxime, ab minus eius alias consequatur natus pariatur officia voluptatem laboriosam ratione itaque.
                                    </Label>
                                </div>
                            </Card>
                        ))
                    }
                </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList
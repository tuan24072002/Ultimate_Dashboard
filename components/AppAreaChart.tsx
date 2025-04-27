"use client"
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig
} from "@/components/ui/chart";
import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-2)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

const chartData = [
    { month: "January", desktop: 340, mobile: 70 },
    { month: "February", desktop: 120, mobile: 260 },
    { month: "March", desktop: 400, mobile: 90 },
    { month: "April", desktop: 80, mobile: 320 },
    { month: "May", desktop: 500, mobile: 60 },
    { month: "June", desktop: 150, mobile: 280 },
];



const AppAreaChart = () => {
    return (
        <div className="">
            <h1 className="text-lg font-medium mb-6">Total Visitor</h1>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <AreaChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                    />
                    <defs>
                        <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="var(--color-desktop)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-desktop)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                            <stop
                                offset="5%"
                                stopColor="var(--color-mobile)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-mobile)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Area
                        dataKey="mobile"
                        type="natural"
                        fill="url(#fillMobile)"
                        fillOpacity={0.4}
                        stroke="var(--color-mobile)"
                        stackId="a"
                    />
                    <Area
                        dataKey="desktop"
                        type="natural"
                        fill="url(#fillDesktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>
        </div>
    )
}

export default React.memo(AppAreaChart)
"use client"
import { cn } from "@/lib/utils";
import { Check, Cog, Moon, Palette, PanelRightClose, Settings, Sun, Type } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useTheme } from "next-themes";
import { useConfig } from "@/hooks/use-config";

const ControlPanel = () => {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const { fontSize, setFontSize, radius, setRadius, animation, setAnimation } = useConfig();

    const fontSizes = [
        { value: "xs", label: "xs" },
        { value: "sm", label: "sm" },
        { value: "base", label: "base" },
        { value: "lg", label: "lg" },
        { value: "xl", label: "xl" },
    ];
    const themeColors: ThemeColors[] = [
        "Default",
        "Red",
        "Rose",
        "Orange",
        "Green",
        "Blue",
        "Yellow",
        "Violet"
    ]
    const textColors: TextColors[] = [
        "Default",
        "Slate",
        "Gray",
        "Zinc",
        "Neutral",
        "Stone",
        "Red",
        "Orange",
        "Amber",
        "Yellow",
        "Lime",
        "Green",
        "Emerald",
        "Teal",
        "Cyan",
        "Sky",
        "Blue",
        "Indigo",
        "Violet",
        "Purple",
        "Fuchsia",
        "Pink",
        "Rose"
    ];

    return (
        <div className="fixed md:block hidden top-1/2 -translate-y-1/2 -right-2 z-50">
            <div className={cn(
                "flex items-center transition ease-in-out",
                open ? "translate-x-0" : "translate-x-[calc(100%-57px)]"
            )}>
                <Button
                    onClick={() => setOpen(!open)}
                    variant="ghost"
                    className={cn(
                        "bg-background py-6 !px-4 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none border-l border-y border-border transition-all duration-300 relative z-10"
                    )}>
                    {open ?
                        <PanelRightClose className="size-6 text-blue-600" /> :
                        <Cog className={cn(
                            "size-6 text-primary",
                            animation && "animate-spin text-rose-500"
                        )} />
                    }
                </Button>
                <div className={cn(
                    "bg-background py-6 px-6 rounded-lg border border-border transition-all h-[500px] w-[350px] overflow-y-auto"
                )}>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold">Appearance</h2>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setOpen(false)}
                            className="h-8 w-8">
                            <PanelRightClose className="size-4 text-blue-600" />
                        </Button>
                    </div>

                    <Tabs defaultValue="theme">
                        <TabsList className="grid grid-cols-3 mb-4 bg-transparent data-[state=active]:bg-transparent">
                            <TabsTrigger value="theme" className="flex items-center gap-2 data-[state=active]:border-b-foreground !border-b-2 rounded-none data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent group">
                                <Palette className="size-4 data-[state=active]:!text-primary" />
                                <span>Theme</span>
                            </TabsTrigger>
                            <TabsTrigger value="text" className="flex items-center gap-2 data-[state=active]:border-b-foreground !border-b-2 rounded-none data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent group">
                                <Type className="size-4 data-[state=active]:!text-primary" />
                                <span>Text</span>
                            </TabsTrigger>
                            <TabsTrigger value="ui" className="flex items-center gap-2 data-[state=active]:border-b-foreground !border-b-2 rounded-none data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent group">
                                <Settings className="size-4 data-[state=active]:!text-primary" />
                                <span>UI</span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="theme" className="space-y-4">
                            <div className="space-y-2">
                                <Label>Mode</Label>
                                <div className="flex gap-2">
                                    <Button
                                        variant={theme === "light" ? "default" : "outline"}
                                        className="flex-1 gap-2"
                                        onClick={() => setTheme("light")}
                                    >
                                        <Sun className="size-4" />
                                        <span>Light</span>
                                        {theme === "light" && <Check className="size-3 ml-1" />}
                                    </Button>
                                    <Button
                                        variant={theme === "dark" ? "default" : "outline"}
                                        className="flex-1 gap-2"
                                        onClick={() => setTheme("dark")}
                                    >
                                        <Moon className="size-4" />
                                        <span>Dark</span>
                                        {theme === "dark" && <Check className="size-3 ml-1" />}
                                    </Button>
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <Label>Color Themes</Label>
                                <div className="grid grid-cols-4 gap-2">
                                    {themeColors.map((color) => (
                                        <ColorThemeSwatch key={color} color={color} />
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="text" className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label>Font Size</Label>
                                    <span className="text-xs text-muted-foreground capitalize">{fontSize}</span>
                                </div>
                                <RadioGroup
                                    value={fontSize}
                                    onValueChange={setFontSize}
                                    className="flex items-center justify-around"
                                >
                                    {fontSizes.map((size) => (
                                        <div key={size.value} className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value={size.value}
                                                id={`font-size-${size.value}`}
                                                className="peer sr-only"
                                            />
                                            <Label
                                                htmlFor={`font-size-${size.value}`}
                                                className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                            >
                                                <span className="text-sm capitalize">{size.label}</span>
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>

                                <Separator />

                                <div className="space-y-4">
                                    <Label>Color Texts</Label>
                                    <div className="flex items-center flex-wrap gap-2">
                                        {textColors.map((color) => (
                                            <ColorTextSwatch key={color} color={color} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="ui" className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label>Border Radius</Label>
                                    <span className="text-xs text-muted-foreground capitalize">{radius}</span>
                                </div>
                                <RadioGroup
                                    value={radius}
                                    onValueChange={setRadius}
                                    className="grid grid-cols-3 gap-2"
                                >
                                    {["none", "sm", "md", "lg", "xl", "full"].map((rad) => (
                                        <div key={rad} className="flex items-center space-x-2">
                                            <RadioGroupItem
                                                value={rad}
                                                id={`radius-${rad}`}
                                                className="peer sr-only"
                                            />
                                            <Label
                                                htmlFor={`radius-${rad}`}
                                                className="flex flex-1 items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary capitalize cursor-pointer"
                                            >
                                                {rad}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Animations</Label>
                                        <p className="text-xs text-muted-foreground">{animation ? "Enabled" : "Disabled"} UI animations</p>
                                    </div>
                                    <Switch
                                        checked={animation}
                                        onCheckedChange={setAnimation}
                                    />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

const ColorThemeSwatch = ({ color = "Default" }: { color: ThemeColors }) => {
    const { colorThemeScheme, setColorThemeScheme } = useConfig();
    const isActive = colorThemeScheme === color;
    return (
        <button
            onClick={() => {
                setColorThemeScheme(color);
            }}
            title={color}
            className={cn(
                "h-10 w-full rounded-md border border-border p-1 relative",
                isActive && "ring-2 ring-primary ring-offset-2",
                color === "Default" && "bg-black dark:bg-white",
                color === "Red" && "bg-[#FB404A] dark:bg-[#E32832]",
                color === "Rose" && "bg-[#FF3667] dark:bg-[#E71E4F]",
                color === "Orange" && "bg-[#FF781A] dark:bg-[#DD4301]",
                color === "Green" && "bg-[#1ACF62] dark:bg-[#01AB71]",
                color === "Blue" && "bg-[#408BFF] dark:bg-[#1455E3]",
                color === "Yellow" && "bg-[#F2B91A] dark:bg-[#D9A001]",
                color === "Violet" && "bg-[#9962FF] dark:bg-[#7420E6]",
            )}
        >
            {isActive && (
                <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 text-accent" />
            )}
        </button>
    );
};
const ColorTextSwatch = ({ color = "Default" }: { color: TextColors }) => {
    const { colorTextScheme, setColorTextScheme } = useConfig();
    const isActive = colorTextScheme === color;
    return (
        <button
            onClick={() => {
                setColorTextScheme(color);
            }}
            title={color}
            className={cn(
                "size-6 rounded-full border border-border p-1 relative",
                isActive && "ring-2 ring-primary ring-offset-2",
                color === "Default" && "bg-black dark:bg-white",
                color === "Slate" && "bg-slate-500 dark:bg-slate-600",
                color === "Gray" && "bg-gray-500 dark:bg-gray-600",
                color === "Zinc" && "bg-zinc-500 dark:bg-zinc-600",
                color === "Neutral" && "bg-neutral-500 dark:bg-neutral-600",
                color === "Stone" && "bg-stone-500 dark:bg-stone-600",
                color === "Red" && "bg-red-500 dark:bg-red-600",
                color === "Orange" && "bg-orange-500 dark:bg-orange-600",
                color === "Amber" && "bg-amber-500 dark:bg-amber-600",
                color === "Yellow" && "bg-yellow-500 dark:bg-yellow-600",
                color === "Lime" && "bg-lime-500 dark:bg-lime-500",
                color === "Green" && "bg-green-500 dark:bg-green-500",
                color === "Emerald" && "bg-emerald-500 dark:bg-emerald-500",
                color === "Teal" && "bg-teal-500 dark:bg-teal-500",
                color === "Cyan" && "bg-cyan-500 dark:bg-cyan-500",
                color === "Sky" && "bg-sky-500 dark:bg-sky-500",
                color === "Blue" && "bg-blue-500 dark:bg-blue-500",
                color === "Indigo" && "bg-indigo-500 dark:bg-indigo-500",
                color === "Violet" && "bg-violet-500 dark:bg-violet-500",
                color === "Purple" && "bg-purple-500 dark:bg-purple-500",
                color === "Fuchsia" && "bg-fuchsia-500 dark:bg-fuchsia-500",
                color === "Pink" && "bg-pink-500 dark:bg-pink-500",
                color === "Rose" && "bg-rose-500 dark:bg-rose-500",
            )}
        >
            {isActive && (
                <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 text-accent" />
            )}
        </button>
    );
};

export default ControlPanel;
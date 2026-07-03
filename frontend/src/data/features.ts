import type { Feature } from "@/src/types";
import {
    ScanSearch,
    Wind,
    BatteryCharging,
    Smartphone,
    Trash2,
    ShieldCheck,
} from "lucide-react";

export const FEATURES: Feature[] = [
    {
        id: "navigation",
        title: "LDS Laser Navigation",
        description:
            "Creates precise maps and plans the most efficient cleaning path.",
        icon: ScanSearch,
        image: "/images/features/navigation.webp",
        highlight: "360° Smart Mapping",
    },
    {
        id: "suction",
        title: "6000Pa Powerful Suction",
        description:
            "Deep cleans carpets and hard floors with powerful suction.",
        icon: Wind,
        image: "/images/features/suction.webp",
    },
    {
        id: "battery",
        title: "Long-lasting Battery",
        description:
            "Clean large homes on a single charge with intelligent power management.",
        icon: BatteryCharging,
        image: "/images/features/battery.webp",
    },
    {
        id: "app-control",
        title: "Xiaomi Home App",
        description:
            "Control schedules, cleaning modes and maps directly from your phone.",
        icon: Smartphone,
        image: "/images/features/app.webp",
    },
    {
        id: "auto-empty",
        title: "Auto Dust Collection",
        description:
            "Automatically empties the dustbin into the docking station.",
        icon: Trash2,
        image: "/images/features/dock.webp",
    },
    {
        id: "obstacle",
        title: "Obstacle Avoidance",
        description:
            "Detects furniture and obstacles for safer navigation.",
        icon: ShieldCheck,
        image: "/images/features/obstacle.webp",
    },
];
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare, Settings, PlayCircle, Hammer, Brain, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/config", label: "Xây Dựng", icon: Settings },
  { href: "/chat", label: "Chat", icon: MessageSquare },
  { href: "/playground", label: "Sân Chơi", icon: PlayCircle },
  { href: "/builder", label: "Thế Giới", icon: Hammer },
  { href: "/ai-mind", label: "Tâm Trí", icon: Brain },
  { href: "/analytics", label: "Thống Kê", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-20 flex-col items-center border-r bg-card py-4">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Brain className="h-6 w-6" />
      </div>

      <Separator className="mb-4" />

      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                size="icon"
                className={cn(
                  "h-14 w-14 flex-col gap-1",
                  isActive && "bg-primary text-primary-foreground"
                )}
                title={item.label}
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px]">{item.label}</span>
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

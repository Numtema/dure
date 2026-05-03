"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Activity, Settings, LayoutDashboard, Share2, Workflow, Shield, Brain, Layers, Box, Terminal, AlertTriangle, FileBox, Database } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const ROUTES = [
  { path: "/dashboard", title: "Dashboard", icon: LayoutDashboard },
  { path: "/runs", title: "Runs Timeline", icon: Activity },
  { path: "/tower", title: "Chief Tower", icon: Shield },
  { path: "/teams", title: "Teams", icon: Share2 },
  { path: "/agents", title: "Agents", icon: Brain },
  { path: "/flows", title: "Flow Builder", icon: Workflow },
  { path: "/protocols", title: "Protocol Inspector", icon: FileBox },
  { path: "/blueprint", title: "Blueprint Governance", icon: Database },
  { path: "/skills", title: "Skills Manager", icon: Layers },
  { path: "/templates", title: "Templates", icon: Box },
  { path: "/toolbox", title: "Toolbox", icon: Shield },
  { path: "/mcp", title: "MCP Bridge", icon: Share2 },
  { path: "/sandbox", title: "Sandbox", icon: Terminal },
  { path: "/hitl", title: "HITL Blocks", icon: AlertTriangle },
  { path: "/artifacts", title: "Artifacts", icon: Box },
];

function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 flex items-center justify-center rounded-full hover:bg-glass transition-colors text-on-surface-muted hover:text-on-surface"
      title="Toggle Theme"
    >
      <Sun className="h-5 w-5 dark:hidden" />
      <Moon className="h-5 w-5 hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar Navigation */}
      <aside className="w-[280px] bg-background-2/40 backdrop-blur-3xl flex flex-col border-r border-border h-full flex-shrink-0 z-20 relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-surface-container/30 before:to-transparent before:-z-10">
        <div className="h-[72px] px-6 flex items-center border-b border-border/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-cognition flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <span className="text-white font-bold tracking-tighter">DF</span>
            </div>
            <h1 className="font-bold text-lg tracking-tight">DurableFlew</h1>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
          <div className="space-y-1">
            <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-on-surface-muted mb-4 px-2">Navigation</div>
            {ROUTES.map((route) => {
              const isActive = pathname === route.path || (pathname === '/' && route.path === '/dashboard');
              const Icon = route.icon;
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-all text-sm font-medium",
                    isActive 
                      ? "bg-primary-soft text-primary-bright border border-primary-soft/50 shadow-[0_0_10px_rgba(59,130,246,0.1)]" 
                      : "text-on-surface-muted hover:bg-glass hover:text-on-surface"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-primary-bright" : "opacity-70")} />
                  {route.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="p-4 border-t border-border mt-auto">
          <Link
            href="/settings"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md transition-all text-sm font-medium",
              pathname === "/settings"
                ? "bg-primary-soft text-primary-bright border border-primary-soft/50 shadow-[0_0_10px_rgba(59,130,246,0.1)]" 
                : "text-on-surface-muted hover:bg-glass hover:text-on-surface"
            )}
          >
            <Settings className={cn("w-4 h-4", pathname === "/settings" ? "text-primary-bright" : "opacity-70")} />
            Settings
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Command Bar */}
        <header className="h-[72px] bg-background-2/80 backdrop-blur-md border-b border-border flex items-center justify-between px-8 flex-shrink-0 z-10">
          <div className="flex items-center gap-4">
            {/* Context breadcrumb from pathname */}
            <div className="flex items-center gap-2 text-sm text-on-surface-muted">
              <span className="font-mono bg-surface-container py-1 px-3 rounded-md border border-border">~</span>
              <span className="opacity-50">/</span>
              <span className="font-medium text-on-surface capitalize">
                {pathname === '/' ? 'dashboard' : pathname.replace('/', '')}
              </span>
            </div>
            
            {/* Connection Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-glass-elevated border border-border text-xs font-medium">
              <div className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_var(--color-success)] pulse" />
              <span className="text-on-surface-muted">Backend Sync</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <div className="bg-surface-container border border-border rounded-full px-4 py-1.5 flex items-center gap-2 mr-2">
                 <SearchIcon className="w-4 h-4 text-on-surface-muted" />
                 <input 
                    type="text" 
                    placeholder="Search runs, teams, flows..." 
                    className="bg-transparent border-none outline-none text-sm w-64 placeholder:text-on-surface-muted/50 text-on-surface h-6"
                 />
                 <div className="text-[10px] font-mono bg-glass px-1.5 py-0.5 rounded text-on-surface-muted">⌘K</div>
             </div>
             <ThemeToggle />
             <div className="w-8 h-8 rounded-full bg-cognition flex items-center justify-center border border-border">
                <span className="text-white text-xs font-bold">OP</span>
             </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-background relative z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cognition/5 dark:bg-cognition/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
          
          <div className="relative z-10 w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

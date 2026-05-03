"use client";

import React, { useState, useEffect } from "react";
import { Activity, Shield, Cpu, Package, Play, CheckCircle2, XCircle, Clock, AlertTriangle, Search, Filter, MoreHorizontal, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// --- Mock Data ---
const METRICS = [
  { label: "Active Runs", value: "24", trend: "+12%", status: "healthy", icon: Activity },
  { label: "Worker Nodes", value: "8/10", trend: "stable", status: "warning", icon: Cpu },
  { label: "Quality Gates", value: "99.2%", trend: "+0.4%", status: "healthy", icon: Shield },
  { label: "Artifacts Gen", value: "1,248", trend: "+244", status: "healthy", icon: Package },
];

const RECENT_RUNS = [
  { id: "run_8fa9bc2", type: "RAG-Plan", status: "running", time: "12s ago", steps: "4/8", owner: "System" },
  { id: "run_1ff3e40", type: "Tower-Loop", status: "completed", time: "4m ago", steps: "12/12", owner: "TeamChief" },
  { id: "run_93cc1a2", type: "Data-Extract", status: "failed", time: "18m ago", steps: "2/5", owner: "DataNode" },
  { id: "run_77a94d1", type: "Review-Pass", status: "completed", time: "1h ago", steps: "3/3", owner: "QualityGate" },
  { id: "run_4cc8b99", type: "Sandbox-Dry", status: "running", time: "2h ago", steps: "1/1", owner: "Developer" },
];

const SYSTEM_HEALTH = [
  { component: "JSONFlow Engine", status: "operational", latency: "24ms" },
  { component: "Chief Tower Orchestrator", status: "operational", latency: "112ms" },
  { component: "Artifact Storage", status: "operational", latency: "8ms" },
  { component: "MCP Bridge", status: "degraded", latency: "840ms" },
  { component: "HITL Notification Queue", status: "operational", latency: "12ms" },
];

// --- Components ---

function MetricCard({ metric, index }: { metric: typeof METRICS[0]; index: number }) {
  const Icon = metric.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="bg-surface-container/40 backdrop-blur-2xl border border-border/80 hover:border-border-strong/50 rounded-xl p-5 relative overflow-hidden group transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)]"
    >
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
        <Icon className="w-24 h-24 text-primary" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-on-surface-muted text-xs font-bold uppercase tracking-wider">
            <Icon className="w-4 h-4 text-primary-bright" />
            {metric.label}
          </div>
          <div className={cn(
            "text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full",
            metric.status === 'healthy' ? "bg-success/10 text-success border border-success/20" : "bg-warning/10 text-warning border border-warning/20"
          )}>
            {metric.status}
          </div>
        </div>
        
        <div className="flex items-end gap-3 left-0">
          <div className="font-sans text-4xl font-light tracking-tight text-on-surface">
            {metric.value}
          </div>
          <div className="text-on-surface-muted text-sm font-medium mb-1">
            {metric.trend}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatusIcon({ status }: { status: string }) {
  switch (status) {
    case 'completed': return <CheckCircle2 className="w-4 h-4 text-success" />;
    case 'running': return <Play className="w-4 h-4 text-primary-bright animate-pulse" />;
    case 'failed': return <XCircle className="w-4 h-4 text-danger" />;
    default: return <Clock className="w-4 h-4 text-on-surface-muted" />;
  }
}

export default function Dashboard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">System Dashboard</h1>
          <p className="text-on-surface-muted">
            Overview of DurableFlew runtime, orchestrators, and network health.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-glass-elevated border border-border text-on-surface rounded-lg text-sm font-medium hover:bg-surface transition flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Time Range
          </button>
          <button className="px-4 py-2 bg-primary text-white border border-primary-bright rounded-lg text-sm font-medium hover:bg-primary-bright transition shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            New Run
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map((m, i) => (
          <MetricCard key={m.label} metric={m} index={i} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Runs Timeline */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold tracking-tight">Recent Runs</h2>
            <div className="text-sm text-primary-bright hover:underline cursor-pointer flex items-center gap-1">
              View All <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
          
          <div className="bg-surface-container/30 backdrop-blur-xl border border-border/80 rounded-xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-border/60 bg-surface/30 text-xs font-bold uppercase tracking-wider text-on-surface-muted">
              <div className="col-span-4 md:col-span-3">Run ID</div>
              <div className="col-span-3 hidden md:block">Type</div>
              <div className="col-span-4 md:col-span-2">Status</div>
              <div className="col-span-2 hidden md:block">Steps</div>
              <div className="col-span-2 text-right">Time</div>
              <div className="col-span-2 text-right"></div>
            </div>
            
            <div className="divide-y divide-border/40">
              {RECENT_RUNS.map((run, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.05), duration: 0.3 }}
                  key={run.id} 
                  className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-glass transition-colors cursor-pointer group"
                >
                  <div className="col-span-4 md:col-span-3 flex items-center gap-3">
                    <StatusIcon status={run.status} />
                    <div>
                      <div className="font-mono text-sm text-on-surface group-hover:text-primary-bright transition-colors">{run.id}</div>
                      <div className="text-[10px] text-on-surface-muted uppercase mt-0.5">{run.owner}</div>
                    </div>
                  </div>
                  <div className="col-span-3 hidden md:block text-sm text-on-surface-muted">
                    {run.type}
                  </div>
                  <div className="col-span-4 md:col-span-2 flex items-center">
                    <span className={cn(
                      "text-[11px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border",
                      run.status === 'completed' ? "bg-success/10 text-success border-success/20" : 
                      run.status === 'running' ? "bg-primary-soft text-primary-bright border-primary-soft" : 
                      "bg-danger/10 text-danger border-danger/20"
                    )}>
                      {run.status}
                    </span>
                  </div>
                  <div className="col-span-2 hidden md:block font-mono text-sm text-on-surface-muted">
                    {run.steps}
                  </div>
                  <div className="col-span-2 text-right text-sm text-on-surface-muted">
                    {run.time}
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <button className="text-on-surface-muted hover:text-on-surface p-1 rounded-md hover:bg-glass">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Health & Info */}
        <div className="space-y-6">
          {/* Health Status */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold tracking-tight">Subsystems</h2>
            <div className="bg-surface-container/30 backdrop-blur-xl border border-border/80 rounded-xl p-4 space-y-4 shadow-sm">
              {SYSTEM_HEALTH.map((sys, i) => (
                <div key={sys.component} className="flex justify-between items-center group">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                       "w-1.5 h-1.5 rounded-full",
                       sys.status === 'operational' ? "bg-success" : "bg-warning animate-pulse"
                    )} />
                    <span className="text-sm font-medium text-on-surface">{sys.component}</span>
                  </div>
                  <div className="font-mono text-xs text-on-surface-muted group-hover:text-on-surface transition-colors">
                    {sys.latency}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info Box (Terminal styled) */}
          <div className="bg-[#0f172a] border border-border rounded-xl overflow-hidden font-mono text-xs text-on-surface shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
            <div className="bg-surface-container/30 backdrop-blur-md border-b border-white/5 dark:border-border/50 px-4 py-2 flex items-center justify-between">
              <span className="text-on-surface-muted uppercase tracking-wider text-[10px] font-sans font-bold">Node CLI / Health</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
            </div>
            <div className="p-4 space-y-2 opacity-80">
              <div className="text-success">&gt; systemctl status durableflew-core</div>
              <div className="pl-2">
                [OK] Master orchestrator online.<br/>
                [OK] Memory bus stable @ 2GB/s.<br/>
                [INFO] Last blueprint snapshot 2h ago.
              </div>
              <div className="text-success mt-4">&gt; ping -c 1 mcp-bridge</div>
              <div className="pl-2 text-warning">
                [WARN] High latency detected on /mcp channel.<br/>
                Investigate connected protocol handlers.
              </div>
              <div className="text-primary-bright mt-4 flex items-center gap-2">
                <span>&gt; _</span><span className="w-1.5 h-3 bg-primary-bright animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

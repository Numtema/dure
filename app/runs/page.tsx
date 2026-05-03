"use client";

import React from "react";
import { Play, RotateCcw, Clock, StopCircle, Search, Filter } from "lucide-react";
import { motion } from "motion/react";

export default function RunsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Runs Timeline</h1>
          <p className="text-on-surface-muted">
            Durable timeline: steps, events, retries, signals, replay, artifacts.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-glass border border-border text-on-surface rounded-lg text-sm font-medium hover:bg-surface transition flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <div className="bg-surface-container border border-border rounded-lg px-4 py-2 flex items-center gap-2">
             <Search className="w-4 h-4 text-on-surface-muted" />
             <input type="text" placeholder="Search runs by ID or status" className="bg-transparent border-none outline-none text-sm w-48 text-on-surface placeholder:text-on-surface-muted" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder for list */}
        <div className="md:col-span-1 bg-surface-container/30 backdrop-blur-xl border border-border/80 rounded-xl overflow-hidden shadow-sm flex flex-col h-[600px]">
           <div className="p-4 border-b border-border/60 bg-surface/30">
              <h3 className="font-bold text-sm">Active & Recent Runs</h3>
           </div>
           <div className="flex-1 overflow-y-auto p-2 space-y-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`p-3 rounded-lg border ${i === 1 ? 'bg-primary-soft/30 border-primary/30' : 'bg-glass border-border/40'} cursor-pointer hover:bg-glass-elevated transition`}>
                   <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm font-medium">run_8fa9bc{i}</span>
                      <span className="text-[10px] uppercase font-bold text-success px-2 py-0.5 bg-success/10 rounded-full border border-success/20">Active</span>
                   </div>
                   <div className="text-xs text-on-surface-muted">Team: Research <br/> Step: 4/8 - Web Scraping</div>
                </div>
              ))}
           </div>
        </div>

        {/* Detail view placeholder */}
        <div className="md:col-span-2 bg-surface-container/30 backdrop-blur-xl border border-border/80 rounded-xl overflow-hidden shadow-sm flex flex-col h-[600px]">
           <div className="px-6 py-4 border-b border-border/60 bg-surface/30 flex items-center justify-between">
              <div>
                 <h3 className="font-bold text-lg font-mono">run_8fa9bc1</h3>
                 <p className="text-xs text-on-surface-muted">Started 12s ago by System Timer</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-glass border border-border rounded-md hover:bg-surface-container text-on-surface-muted hover:text-on-surface transition" title="Signal">
                   <Play className="w-4 h-4" />
                </button>
                <button className="p-2 bg-glass border border-border rounded-md hover:bg-surface-container text-on-surface-muted hover:text-on-surface transition" title="Replay">
                   <RotateCcw className="w-4 h-4" />
                </button>
                <button className="p-2 bg-danger/10 border border-danger/20 rounded-md hover:bg-danger/20 text-danger transition" title="Terminate">
                   <StopCircle className="w-4 h-4" />
                </button>
              </div>
           </div>
           <div className="flex-1 p-6 overflow-y-auto flex items-center justify-center">
              <div className="text-center space-y-4 opacity-50">
                <Clock className="w-12 h-12 mx-auto text-on-surface-muted" />
                <p>Timeline visualization will appear here.</p>
                <p className="text-xs font-mono">Durable DAG execution graph component</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

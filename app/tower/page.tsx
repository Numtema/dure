"use client";

import React from "react";
import { Shield, Network, Activity, Cpu, Aperture } from "lucide-react";

export default function TowerPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
            <Shield className="text-primary-bright" />
            Chief Tower
          </h1>
          <p className="text-on-surface-muted">
            Tower prompt, dynamic team plan, inter-team graph, T2T/C2T messages, repair loop, quality gate.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-surface-container border border-border text-on-surface rounded-lg text-sm font-medium hover:bg-surface transition">
            Simulate Plan
          </button>
          <button className="px-5 py-2 bg-gradient-to-r from-cognition to-primary text-white shadow-glow border border-transparent rounded-lg text-sm font-bold tracking-wide hover:opacity-90 transition">
            Execute Strategy
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-surface-container/30 backdrop-blur-xl border border-border/80 rounded-xl p-5 shadow-sm">
             <div className="flex items-center gap-2 mb-4 text-sm font-bold text-on-surface-muted uppercase tracking-wider">
               <Aperture className="w-4 h-4 text-cognition" />
               Tower Prompt
             </div>
             <textarea 
               className="w-full bg-background-2/50 border border-border rounded-lg p-3 text-sm text-on-surface font-mono resize-none focus:outline-none focus:border-cognition/50 h-32"
               placeholder="Enter macro instruction for the Chief Orchestrator..."
               defaultValue={"Goal: Analyze Q3 earnings reports across top 5 tech companies, extract key metrics, draft a comparative summary, and export as PDF.\nConstraints: Use strictly verifiable facts from the SEC filings."}
             />
          </div>

          <div className="bg-surface-container/30 backdrop-blur-xl border border-border/80 rounded-xl p-5 shadow-sm">
             <div className="flex items-center gap-2 mb-4 text-sm font-bold text-on-surface-muted uppercase tracking-wider">
               <Activity className="w-4 h-4 text-warning" />
               Repair Loop Stats
             </div>
             <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between"><span>Retries triggered</span><span className="text-warning">14</span></div>
                <div className="flex justify-between"><span>Auto-corrected</span><span className="text-success">11</span></div>
                <div className="flex justify-between"><span>Escalated to HITL</span><span className="text-danger">3</span></div>
             </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-surface-container/30 backdrop-blur-xl border border-border/80 rounded-xl overflow-hidden shadow-sm flex flex-col min-h-[500px]">
           <div className="px-6 py-4 border-b border-border/60 bg-surface/30 flex items-center justify-between">
             <div className="flex items-center gap-2 text-sm font-bold text-on-surface-muted uppercase tracking-wider">
               <Network className="w-4 h-4 text-primary" />
               Inter-Team Collaboration Graph (DAG)
             </div>
             <div className="flex gap-2">
                <span className="flex items-center gap-1 text-[10px] bg-glass px-2 py-1 rounded"><span className="w-2 h-2 rounded-full bg-success"></span> Idle</span>
                <span className="flex items-center gap-1 text-[10px] bg-glass px-2 py-1 rounded"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Active</span>
             </div>
           </div>
           
           <div className="flex-1 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat relative flex items-center justify-center">
              {/* Fake Graph */}
              <div className="absolute inset-0 bg-background/50"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-12">
                <div className="bg-surface-container border border-cognition/50 rounded-lg p-3 shadow-[0_0_20px_rgba(139,92,246,0.2)] text-center w-48">
                  <div className="text-xs font-bold text-cognition uppercase tracking-wider mb-1">Chief Orchestrator</div>
                  <div className="text-[10px] text-on-surface-muted">TOWER-01</div>
                </div>

                <div className="flex gap-16">
                   <div className="bg-surface-container border border-primary/50 rounded-lg p-3 shadow-[0_0_15px_rgba(59,130,246,0.1)] text-center w-40 relative">
                     <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Data Research</div>
                     <div className="text-[10px] text-on-surface-muted">TEAM-A</div>
                     {/* connecting line mock */}
                     <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-border"></div>
                   </div>

                   <div className="bg-surface-container border border-primary/50 rounded-lg p-3 shadow-[0_0_15px_rgba(59,130,246,0.1)] text-center w-40 relative">
                     <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Financial Analysis</div>
                     <div className="text-[10px] text-on-surface-muted">TEAM-B</div>
                     <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-border"></div>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

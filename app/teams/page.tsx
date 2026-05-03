"use client";

import React from "react";
import { Users, Code, Activity, Database, Boxes } from "lucide-react";
import { cn } from "@/lib/utils";

const TEAMS = [
  { id: "team_research", name: "Research Team", status: "idle", nodes: 3, chief: "Researcher-Alpha", tasks: 0 },
  { id: "team_engineering", name: "Engineering Team", status: "active", nodes: 5, chief: "Builder-Omega", tasks: 12 },
  { id: "team_qa", name: "Quality Assurance", status: "idle", nodes: 2, chief: "Inspector-1", tasks: 0 },
  { id: "team_writer", name: "Content Writers", status: "degraded", nodes: 3, chief: "Editor-Bot", tasks: 4 },
];

export default function TeamsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
            <Users className="text-primary-bright" />
            Teams Registry
          </h1>
          <p className="text-on-surface-muted">
            Manage TeamChiefs, sub-agents, capabilities, and contracts.
          </p>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-bright transition">
          Create Team
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEAMS.map((team) => (
          <div key={team.id} className="bg-surface-container/30 backdrop-blur-xl border border-border/80 rounded-xl p-5 hover:border-primary/30 transition-colors shadow-sm group">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <h3 className="font-bold text-lg">{team.name}</h3>
                  <p className="text-xs text-on-surface-muted font-mono mt-1">{team.id}</p>
               </div>
               <span className={cn(
                  "px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider border",
                  team.status === 'active' ? 'bg-success/10 text-success border-success/20' :
                  team.status === 'degraded' ? 'bg-warning/10 text-warning border-warning/20' :
                  'bg-glass text-on-surface-muted border-border'
               )}>
                 {team.status}
               </span>
            </div>

            <div className="space-y-4 mt-6">
               <div className="flex items-center justify-between text-sm">
                  <span className="text-on-surface-muted flex items-center gap-2"><Boxes className="w-4 h-4" /> Chief</span>
                  <span className="font-medium text-cognition">{team.chief}</span>
               </div>
               <div className="flex items-center justify-between text-sm">
                  <span className="text-on-surface-muted flex items-center gap-2"><Database className="w-4 h-4" /> Nodes</span>
                  <span className="font-mono">{team.nodes}</span>
               </div>
               <div className="flex items-center justify-between text-sm">
                  <span className="text-on-surface-muted flex items-center gap-2"><Activity className="w-4 h-4" /> Active Tasks</span>
                  <span className="font-mono">{team.tasks}</span>
               </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
               <button className="text-xs hover:text-primary-bright font-medium text-on-surface-muted transition-colors flex items-center gap-1">
                 <Code className="w-3 h-3" /> Edit Contract
               </button>
               <button className="text-xs hover:text-primary-bright font-medium text-on-surface-muted transition-colors">
                 Manage Agents
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

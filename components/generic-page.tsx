"use client";

import React from "react";
import { Brain, Search, Code, Key, BookOpen, AlertCircle } from "lucide-react";

export default function GenericPage({ title, description }: { title: string, description: string }) {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
          <p className="text-on-surface-muted">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-center h-[50vh] border border-dashed border-border/50 rounded-2xl bg-glass">
        <div className="text-center space-y-4 max-w-sm px-4">
           <AlertCircle className="w-12 h-12 text-on-surface-muted opacity-50 mx-auto" />
           <p className="text-on-surface-muted">This module is under construction.</p>
           <p className="text-xs font-mono text-on-surface-muted/60 opacity-50 text-wrap break-all items-center justify-center">Please check back later or refer to the DESIGN.md doc for specifications.</p>
        </div>
      </div>
    </div>
  );
}

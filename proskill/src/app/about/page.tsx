"use client";
import React from 'react'
import Top from './AboutElements/Top'  
import About from './AboutElements/About'
import AppShell from "../AppShell";

export default function AboutPage() {
  return (
    <AppShell>
      <Top/>
      <About/>
      
    </AppShell>
  );
}
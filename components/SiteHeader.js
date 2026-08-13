'use client';
import Link from 'next/link';
import { useState } from 'react';

const links=[['Advisory','/advisory'],['Execution','/execution'],['Global Teams','/execution/global-teams'],['Affordable Housing','/affordable-housing-advisory']];
export default function SiteHeader({light=false}){
 const [open,setOpen]=useState(false);
 return <header className={`site-header ${light?'header-light':''}`}><div className="nav-wrap"><Link className="brand" href="/" aria-label="Akhada Consulting home"><span className="brand-mark">A</span><span>AKHADA <small>CONSULTING</small></span></Link><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="main-nav"><span className="sr-only">Toggle navigation</span><i/><i/></button><nav id="main-nav" className={open?'open':''} aria-label="Primary navigation">{links.map(([n,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{n}</Link>)}<a className="nav-cta" href="https://calendly.com/scott8smith/founder-strategy-conversation" target="_blank" rel="noreferrer">Start a conversation</a></nav></div></header>
}

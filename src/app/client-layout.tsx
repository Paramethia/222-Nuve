"use client";
import { useState } from 'react';
import { Globalize } from './globalize';
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

export default function ClientLayout({ children }  : { children: React.ReactNode }){
    const [chosenSession, setChosenSession] = useState<string>("");
    
    return (
        <Globalize.Provider value={{ chosenSession, setChosenSession }}>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer /> 
        </Globalize.Provider>
    );
}
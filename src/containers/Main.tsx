import React from "react";

export interface MainProps {
    children: React.ReactNode
}

export const Main = ({children} : MainProps) =>{
    return (
        <section className="flex-auto">
            {children}
        </section>
    )
}

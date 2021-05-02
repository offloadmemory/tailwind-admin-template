//https://play.tailwindcss.com/hwSdCEwf0B
import React from "react";

import Header from "../Header";

function Outlined() {
    return (
        <div className="pl-5 pt-5">
            <Header
                title="Outlined Buttons"
                description="Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren't the primary action in an app"
            />

            <div className="flex items-center space-x-1 pt-5">
                <button className="border border-blue-500 text-blue-500 rounded-md w-20 h-6 justify-center text-xs hover:bg-blue-500 hover:text-white">Primary</button>

                <button className="border border-yellow-500 text-yellow-500 rounded-md w-20 h-6 justify-center text-xs hover:bg-yellow-500 hover:text-white">Warning</button>

                <button className="border border-red-500 text-red-500 rounded-md w-20 h-6 justify-center text-xs hover:bg-red-500 hover:text-white">Danger</button>
            </div>
        </div>

    )
}

export default Outlined;

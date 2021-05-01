//https://play.tailwindcss.com/hwSdCEwf0B
import React from "react";

import Header from "./Header";

function Active() {
    return (
        <div className="pl-5 pt-5">
            <Header
                title="Active Buttons"
                description="Active buttons are actionable element, allows user to interact"
            />

            <div className="flex items-center space-x-1 pt-5">
                <button className="bg-blue-500 text-white rounded-md w-20 h-6 justify-center text-xs hover:bg-blue-300">Primary</button>

                <button className="bg-yellow-500 text-white rounded-md w-20 h-6 justify-center text-xs hover:bg-yellow-300">Warning</button>

                <button className="bg-red-500 text-white rounded-md w-20 h-6 justify-center text-xs hover:bg-red-300">Danger</button>
            </div>
        </div>

    )
}

export default Active;

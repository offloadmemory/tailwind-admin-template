//https://play.tailwindcss.com/hwSdCEwf0B
import React from "react";

import Header from "./Header";

function Linked() {
    return (
        <div className="pl-5 pt-5">
            <Header
                title="Linked Buttons"
                description="Mostly uses to navigate to external links"
            />

            <div className="flex items-center space-x-1 pt-5">
                <button className="text-blue-500 hover:underline hover:font-medium font-medium rounded-md w-20 h-6 justify-center text-xs">Primary</button>

                <button className="text-yellow-500 hover:underline font-medium rounded-md w-20 h-6 justify-center text-xs">Warning</button>

                <button className="text-red-500 hover:underline font-medium rounded-md w-20 h-6 justify-center text-xs">Danger</button>
            </div>
        </div>
    )
}

export default Linked;

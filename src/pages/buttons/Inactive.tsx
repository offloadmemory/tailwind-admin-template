//https://play.tailwindcss.com/hwSdCEwf0B
import React from "react";

import Header from "./Header";

function Inactive() {
    return (
        <div className="pl-5 pt-5">
            <Header
                title="Inactive Buttons"
                description="Inactive buttons are not actionable, will be activated conditionally"
            />

            <div className="flex items-center space-x-1 pt-5">
                <button className="bg-blue-300 text-white rounded-md w-20 h-6 justify-center text-xs focus:outline-none">Primary</button>

                <button className="bg-yellow-300 text-white rounded-md w-20 h-6 justify-center text-xs focus:outline-none">Warning</button>

                <button className="bg-red-300 text-white rounded-md w-20 h-6 justify-center text-xs focus:outline-none">Danger</button>
            </div>
        </div>

    )
}

export default Inactive;

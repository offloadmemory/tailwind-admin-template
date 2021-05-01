import React from "react";

function Buttons() {
    return (
        <div className="p-5">
            <div>Basic Buttons</div>
            <div className="text-gray-400 text-sm">Buttons allow users to take actions, and make choices, with a single tap</div>
            <div className="flex items-center space-x-1 pt-5">
                <button className="bg-blue-500 text-white rounded-md w-20 h-6 justify-center text-xs hover:bg-blue-300">Primary</button>

                <button className="bg-yellow-500 text-white rounded-md w-20 h-6 justify-center text-xs hover:bg-yellow-300">Warning</button>

                <button className="bg-red-500 text-white rounded-md w-20 h-6 justify-center text-xs hover:bg-red-300">Danger</button>
            </div>
        </div>
    )
}

export default Buttons;

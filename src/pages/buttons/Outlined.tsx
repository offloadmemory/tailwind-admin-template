//https://play.tailwindcss.com/hwSdCEwf0B
import React from "react";

function Outlined() {
    return (
        <div className="p-5">
            <div className="flex space-x-1 items-center">
                <div>Outlined Buttons</div>
                <button className="w-5 h-5 border flex items-center justify-center rounded-md text-gray-400 bg-gray-50 border-gray-400 hover:bg-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </button>

                <button className="w-5 h-5 border flex items-center justify-center bg-gray-50 rounded-md text-gray-400 border-gray-400 hover:bg-gray-400 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>
            </div>
            <div className="text-gray-400 text-sm">Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren't the primary action in an app</div>
            <div className="flex items-center space-x-1 pt-5">
                <button className="border border-blue-500 text-blue-500 rounded-md w-20 h-6 justify-center text-xs hover:bg-blue-500 hover:text-white">Primary</button>

                <button className="border border-yellow-500 text-yellow-500 rounded-md w-20 h-6 justify-center text-xs hover:bg-yellow-500 hover:text-white">Warning</button>

                <button className="border border-red-500 text-red-500 rounded-md w-20 h-6 justify-center text-xs hover:bg-red-500 hover:text-white">Danger</button>
            </div>
        </div>

    )
}

export default Outlined;

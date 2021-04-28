import React from "react";

export interface InputProps {
    placeholder: string;
}

export const Input:React.FC<InputProps> = ({placeholder}) => {
    return (
        <input 
            type="text" 
            placeholder={placeholder}
            className={`
                flex-auto w-full 
                outline-none px-6 py-2 
                border-2 focus:border-indigo-400 rounded-md
            `}
        />
    )
}

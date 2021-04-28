import { SearchIcon} from '@heroicons/react/outline';
import React from 'react';
import {Input} from './Input';

export interface InputGroupProps {
    className : string;
}

export const InputGroup:React.FC<InputGroupProps> = ({className}) => {
    return (
        <div className={`flex flex-row relative ${className}`}>
            <span className="absolute inset-y-0 left-0 py-3 px-2">
                <SearchIcon className="w-4 h-4"/>
            </span>
            <Input placeholder="Search for Projects"/>
        </div>
    )
}

export default InputGroup

import React from 'react';
import {
    HomeIcon,
    ThumbUpIcon
} from '@heroicons/react/outline';

const InfoCard = (props: { infoData: any; }) => {
    const { infoData } = props;

    return (

        <div className="grid grid-cols-4 gap-4 mt-4">
            {infoData && infoData.length > 0 && infoData.map((data: { title: any; stat: any; }) =>
                <div className="flex border border-grey-400">
                    <div className="w-20 h-20 bg-blue-500 flex items-center justify-center">
                        <ThumbUpIcon className="w-10 h-10 text-white" />
                    </div>
                    <div className="m-1 text-md uppercase">
                        <div>{data.title}</div>
                        <div className="font-bold">{data.stat}</div>
                    </div>
                </div>)}

        </div>

    )
}

export default InfoCard;

import React from 'react';

import InfoCard from "./InfoCard";
import Header from "../Header";

function Cards() {
    return (
        <>
            <div className="pl-5 pt-5">
                <Header
                    title="Info Cards"
                    description="Helps to show the stat in simple view"
                />
                <InfoCard infoData={[{ title: "test", stat: "10" }]} />
            </div>
        </>
    )
}

export default Cards;

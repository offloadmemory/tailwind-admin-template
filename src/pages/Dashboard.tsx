import React from "react";

import InfoCard from "./cards/InfoCard";

function Dashboard() {
    const infoData = [
        { title: "CPU Traffic", stat: "90%" },
        { title: "Likes", stat: "40,000" },
        { title: "Sales", stat: "500" },
        { title: "New Members", stat: "700" }
    ]

    return (
        <InfoCard infoData={infoData} />
    )
}

export default Dashboard;

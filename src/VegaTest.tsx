import React from 'react';
import BarChart from "./components/BarChart";
import AreaChart from "./components/AreaChart";
import StackedAreaChart from "./components/StackedAreaChart";
import DonutChart from "./components/DonutChart";
import HeatMap from "./components/HeatMap";

export default function VegaTest() {

    return (
        <>
           <HeatMap/>
           {/*<DonutChart/>*/}
           {/*<StackedAreaChart/>*/}
           {/*<AreaChart/>*/}
           {/*<BarChart/>*/}
        </>
    );
}
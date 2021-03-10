
import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import Fasion2 from './Fasion2'
import TotalChart from './TotalChart'
import { useSelector } from 'react-redux'

charts(FusionCharts);

export default function MyComponent() {
    // colors: [' rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('')
    //   ""
    console.log(rgbToHex(247, 181, 0)); // '#f7b500'
    console.log(rgbToHex(1, 220, 209)); // "#01dcd1"
    console.log(rgbToHex(103, 114, 222)); // "#6772de"
    console.log(rgbToHex(253, 81, 219)); // "#fd51db"
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    const dataSource = {
        type: 'column3d',
        // renderAt: 'chart-container',
        width: '700',
        height: '250',
        // dataFormat: 'json',
        "theme": " ",
        dataSource: {
            "chart": {
                bgColor: "#ff0000",
                canvasBgColor: "#ff0000",
                // "bgImage": "https://upload.wikimedia.org/wikipedia/commons/7/79/Misc_fruit.jpg"
            },
        },
        fill: {
            type: 'image',
            image: {
                src: ['https://upload.wikimedia.org/wikipedia/commons/7/79/Misc_fruit.jpg'],
                width: undefined,  // optional
                height: undefined  //optional
            }
        },
        data: [
            {
                label: "contacts",
                value: UpdatedData.leaderStatic.sumContacts,
                "color": '#f7b500',

            },
            {
                label: "papers",
                value: UpdatedData.leaderStatic.sumPapers,
                "color": "#01dcd1"
            },
            {
                label: "projects",
                value: UpdatedData.leaderStatic.sumProjects,
                "color": "#6772de"


            },
            {
                label: "tasks",
                value: UpdatedData.leaderStatic.sumTasks,
                "color": "#fd51db"

            }


        ]
    };

    return (
        <>

            <div id="c">
                <ReactFusioncharts
                    type="column3d"
                    width="40%"
                    height="
                210%"
                    dataSource={dataSource}
                />
                {/* <Fasion2></Fasion2> */}
                <TotalChart></TotalChart>
            </div>
        </>
    );
}

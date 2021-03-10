import React from 'react';
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux';


export default function ApexChart () {
    
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
        const state = {

            series: [UpdatedData.leaderStatic.sumContacts,
                UpdatedData.leaderStatic.sumPapers,
                UpdatedData.leaderStatic.sumProjects,
                UpdatedData.leaderStatic.sumTasks],
               
            options: {
                chart: {
                    width: 380,
                    type: 'polarArea'
                },
                labels: ['contacts', 'papers', 'projects ', 'tasks'],
                fill: {
                    opacity: 1
                },
                stroke: {
                    width: 1,
                    colors: undefined
                },
                yaxis: {
                    show: false
                },
                legend: {
                    position: 'bottom'
                },
                colors: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
                
                // plotOptions: {
                //     polarArea: {
                //         rings: {
                //             strokeWidth: 0
                //         }
                //     }
                // },
                // theme: {
                //     monochrome: {
                //         // enabled: true,
                //         // shadeTo: 'light',
                //         // shadeIntensity: 0.6
                //     }
                // }
            },


        };
    



   
        return (


            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="polarArea" width={380} />
            </div>
        )
    }

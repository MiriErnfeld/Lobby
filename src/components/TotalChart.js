import React from 'react';
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'

export default function ApexChart() {

    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    const state = {
        series: [UpdatedData.leaderStatic.sumContacts,
        UpdatedData.leaderStatic.sumPapers,
        UpdatedData.leaderStatic.sumProjects,
        UpdatedData.leaderStatic.sumTasks],
        options: {
            chart: {
                type: 'radialBar',
                background: '#f8f9fa',
            },
            colors: [' rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgba(255, 69, 96, 0.85)']
            , plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            show: true,
                            fontSize: '14px',
                            fontFamily: undefined,
                            fontWeight: 400,
                            color: undefined,
                            offsetY: 16,
                            formatter: function (val) {
                                return val
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)
                            }

                        },
                    }
                }
            },
            labels: ['contacts', 'papers', 'projects ', 'tasks'],
        },


    };
    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="radialBar" className="m-0" height="100%" width="
            100%" />
        </div>
    )
}
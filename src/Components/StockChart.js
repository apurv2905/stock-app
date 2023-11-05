import React from 'react';
import './StockChart.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

function StockChart(props) {
    return (
        <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={450}
                    height={300}
                    data={props.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey={props.dataKey} fill="#121" background={{ fill: "white" }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default StockChart;

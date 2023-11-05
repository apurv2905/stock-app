import React from "react";
import './ShowList.css';
import StockChart from "./StockChart";

function ShowList({ list }) {
    console.log(list);
    return (
        <div className="display-chart">
            <p>If any progress bar is not visible means data for that stock hasn't been retrieved yet.</p>
            <div className="open-close">
                <StockChart data={list} dataKey="open"/>
                <StockChart data={list} dataKey="close"/>
            </div>
            <div className="high-low">
                <StockChart data={list} dataKey="high"/>
                <StockChart data={list} dataKey="low"/>
            </div>
        </div>
    );
}

export default ShowList;
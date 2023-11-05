import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ShowList from "./ShowList";
import Lottie from 'react-lottie';
import './FetchData.css';
import loadingAni from './loadingAni.json';

function FetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadingAnimation = {
        loop: true,
        autoplay: true,
        animationData: loadingAni,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    useEffect(() => {

        const tickers = ['AAPL', 'TSLA', 'AMZN', 'META', 'MSFT'];
        const today = new Date();
        console.log(today);
        const yesterday = new Date(today);

        yesterday.setDate(today.getDate() - 2);

        const formattedDate = yesterday.toISOString().split('T')[0];
        async function fetchDataForTicker(ticker) {
            try {
                // const apiUrl = `https://api.polygon.io/v1/open-close/${ticker}/${formattedDate}?adjusted=true&apiKey=CMR_FkWnAp6dxrd1FZ7BOqdD6XlYjlac`;
                const apiUrl = `https://api.polygon.io/v1/open-close/${ticker}/${formattedDate}?adjusted=true&apiKey=CMR_FkWnAp6dxrd1FZ7BOqdD6XlYjlac`;
                const request = await axios.get(apiUrl);
                return {
                    name: request.data.symbol,
                    open: request.data.open,
                    close: request.data.close,
                    high: request.data.high,
                    low: request.data.low
                };
            } catch (error) {
                if (error.response && error.response.status === 429) {
                    console.error('Rate limit exceeded. Waiting before retrying...');
                } else {
                    console.error(`Error fetching data for ${ticker}:`, error);
                }

                return null;
            }
        }
        async function wait() {
            await new Promise(resolve => setTimeout(resolve, 25000));
        }
        async function fetchData() {
            const dataFetched = [];

            for (const ticker of tickers) {
                const result = await fetchDataForTicker(ticker);
                if (result) {
                    dataFetched.push(result);
                }
                await wait();
            }
            setData(dataFetched);
        }

        fetchData().then(() => {
            console.log("computed.");
            setLoading(false);
        });

    }, []);
    console.log(data);
    return (
        <div>
            {!loading ? (
                <ShowList list={data}/>
            ) : (
                <>
                    <Lottie options={loadingAnimation} height={200} width={200}/>
                    <p>Fetching the latest stock data. Please wait, this may take up to 2 minutes.</p>
                    <p>Thank you for your patience.</p>
                </>
            )}
        </div>
    );
}

export default FetchData;

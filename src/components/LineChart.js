import React, { useState, useEffect } from 'react';
import styles from '../styles/LineChart.module.css'
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line  no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto'
import { initialData, tooltipLine, options } from '../services/chartJS/config';
import { metalAPIFetch } from '../services/api/metalAPI/fetch';

const LineChart = () => {
    const [userData, setUserData] = useState(initialData)

    useEffect(() => {
        metalAPIFetch(userData, setUserData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.chart}>
            {userData && <Line data={userData} options={options} plugins={[tooltipLine]} />}
        </div>
    )

};

export default LineChart;
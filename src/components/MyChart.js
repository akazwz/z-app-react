import React, {useEffect, useRef, useState} from "react";
import * as echarts from "echarts"

function MyChart() {
    const chartRef = useRef(null);
    const [state, setState] = useState('this is my charts');

    function initEcharts() {
        const myChart = echarts.init(chartRef.current)
        myChart.setOption({
            title: {
                text: 'React-Echarts'
            },
            tooltips: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20],
            }],
        })
    }

    useEffect(() => {
        initEcharts()
    });

    return (
        <div>
            <h1>{state}</h1>
            <div style={{width: "500px", height: "500px"}} ref={chartRef}/>
        </div>

    )
}

export default MyChart

import React, {useEffect, useRef, useState, useMemo} from "react";
import * as echarts from "echarts"
import randomArr from "../utils/fUtils";
function MyChart() {
    const chartRef = useRef(null);
    const [title, setTitle] = useState('this is my charts');

    const xData = useMemo(() => {
        return []
    }, []);

    const yData = useMemo(() => {
        return []
    }, []);

    let initEcharts;
    initEcharts = () => {
        const myChart = echarts.init(chartRef.current)
        myChart.setOption({
            title: {
                text: 'React-Echarts'
            },
            tooltips: {},
            xAxis: {
                data: xData,
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: yData,
            }],
        })
    };

    let changeData;
    changeData = () => {
        setInterval(function () {
            const xArr = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            const yArr = [5, 20, 36, 10, 10, 20]
            let myChart = echarts.getInstanceByDom(chartRef.current)
            myChart.setOption({
                xAxis: {
                    data: randomArr(xArr),
                },
                series: [{
                    name: '销量',
                    data: randomArr(yArr),
                }],
            })
        }, 5000)
    };

    useEffect(() => {
        initEcharts()
        changeData()
        setTitle("this is new title")
    }, [initEcharts, changeData]);

    return (
        <>
            <h1>{title}</h1>
            <div style={{width: "500px", height: "500px"}} ref={chartRef}/>
        </>
    )
}

export default MyChart

import React, {Component} from "react";
import * as echarts from "echarts"
import randomArr from "../utils/fUtils";

class EchartsClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            yData: [5, 20, 36, 10, 10, 20],
        }
    }

    componentDidMount() {
        alert("echarts start to init")
        let myChart = echarts.getInstanceByDom(document.getElementById('chart'))
        if (!myChart) {
            myChart = echarts.init(document.getElementById('chart'))
        }
        myChart.setOption({
            title: {
                text: "echarts class"
            },
            tooltip: {},
            xAxis: {
                data: this.state.xData,
            },
            yAxis: {},
            series: [
                {
                    name: "销量",
                    type : 'bar',
                    data: this.state.yData,
                },
            ]
        })

        const changeData = () => {
            setInterval( () => {
                myChart.setOption({
                    xAxis: {
                        data: randomArr(this.state.xData),
                    },
                    series: [
                        {
                            name: "销量",
                            data: randomArr(this.state.yData),
                        },
                    ]
                })
            }, 5000)
        }
        changeData()
    }

    componentWillUnmount() {
        alert("echarts will be destroyed")
    }

    render() {
        return (
            <>
                <h1>this is echarts class</h1>
                <div id="chart" style={{width: 400, height: 400}}>
                </div>
            </>
        )
    }
}

export default EchartsClass

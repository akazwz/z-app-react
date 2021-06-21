import React, {Component} from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};

        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000,
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                现在是北京时间 {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

class MyInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit() {
        this.props.getValue(this.state.value)
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button type="button" onClick={this.handleSubmit}>提交</button>
            </div>
        )
    }
}


function HaveFun(props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <Clock/>
            <MyInput name={props.name} getValue={props.getValue}/>
        </div>
    )
}

export default HaveFun



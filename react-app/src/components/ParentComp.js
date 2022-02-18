import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

//In case of PureComponent, ParentComp is never re-rendered neither its chidren

// class ParentComp extends PureComponent {
class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Akriti'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Akriti'
            })
        }, 2000)
    }
    //pure comp is never re-render
    render() {
        console.log('*****Parent component render*****')
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
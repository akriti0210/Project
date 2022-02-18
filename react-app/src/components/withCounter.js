import React from "react";

const withCounter = (WrappedComponent, increementNumber) => {
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + increementNumber }
            })
        }

        render() {
            //{this.props.name}
            // Akriti for ClickCounter, undefined for HoverCounter
            console.log(this.props.name)
            return <WrappedComponent
                // name='Akriti'
                count={this.state.count}
                incrementCount={this.incrementCount}
                //passing the props to the wrapped component
                {...this.props}
            />
        }
    }
    return WithCounter
}

export default withCounter
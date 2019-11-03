import React from "react";
import { genRandomAlphaNumeric } from 'shared/src/common/utils'

export interface SampleComponentProps {

}

export interface SampleComponentState {
    time: number
}

export class SampleComponent extends React.Component<SampleComponentProps, SampleComponentState> {

    constructor(props: SampleComponentProps) {
        super(props)
        this.state = {
            time: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: this.state.time + 1000})
        }, 1000)
    }

    render() {
        return <div>
            <p>Sample Component {this.state.time/1000} s</p>
            <p>Random string - {genRandomAlphaNumeric(10)}</p>
        </div>
    }
}
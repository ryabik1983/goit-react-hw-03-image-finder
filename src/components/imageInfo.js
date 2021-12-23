import { Component } from "react";

export default class ImageInfo extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value) {
            console.log('changed');
            console.log('prevProps.value:', prevProps.value);
            console.log('this.props.value:', this.props.value);
            
        }
    }
    render () {
        return (
            <div>
                <h1>ImageInfo</h1>
                <p>{this.props.value}</p>
            </div>
        )
    }
};

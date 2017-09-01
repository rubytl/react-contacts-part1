import React, { Component } from 'react';
export class Book extends Component {

    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}
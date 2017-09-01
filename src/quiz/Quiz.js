import React, { Component } from 'react';
import { Book } from './Book';
export class Quiz extends Component {
    render() {
        return (
            <div>
                {this.props.books.map(
                    function (b) {
                        return <Book title={b}/>;
                    }
                )}
            </div>
        );
    }
}
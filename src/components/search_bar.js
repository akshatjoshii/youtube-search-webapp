/**
 * Created by Akshat on 08-08-2017.
 */

import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            term: ''
        }
    }
    render(){
        return (
            <div>
                <input value={this.state.term} onChange={this.onInputChange.bind(this)} />
            </div>
        )
    }

    onInputChange(event){
        console.log(event.target.value);
         this.setState({term: event.target.value});
    }
}


export default SearchBar
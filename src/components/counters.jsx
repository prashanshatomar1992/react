import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state={
        counters : [
            { id:1,value :0},
            { id:2,value :0},
            { id:3,value :0},
            { id:4,value :0}       
        ]
    };
    handleDelete = () =>{
        console.log("event handler delete clicked");
    }
    render() {
        // console.log('props  ',this.props)
        return (
            <div>
                {/* <Counter />
                <Counter />
                <Counter />
                <Counter /> */}
                {this.state.counters.map(counter=> 
                <Counter key={counter.id} 
                value={counter.value} 
                selected={true} 
                id={counter.id} 
                onDelete={this.handleDelete}>
                <h3>Counter # {counter.id}</h3>
                </Counter>
                )
                }
            </div>
        ) 
    }
}
export default Counters;
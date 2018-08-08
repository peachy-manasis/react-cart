import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        console.log("counters rendered");
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return ( <div>
            <button className="btn btn-primary btn-sm m2" onClick={onReset}>Reset</button>
            {counters.map(counter => 
            <Counter key={counter.id} counter={counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement}/>)}
        </div> );
    }
}
 
export default Counters;<div> </div>
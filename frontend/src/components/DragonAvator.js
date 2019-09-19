import React, { Component } from 'react';

class DragonAvator extends Component {
    render(){
        const {generationId, dragonId, traits} = this.props.dragon;

        return(
            <div>
                <span>G{generationId}.</span>
                <span>I{dragonId}. </span>
                {traits.map(trait => trait.traitValue).join(', ')}
            </div>
        )
    }

}

export default DragonAvator;
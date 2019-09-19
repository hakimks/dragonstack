import React, { Component } from 'react';
import {skinny, slender, sporty, stocky, patchy, plain, spotted, striped } from '../assets';

const propertyMap = {
    backgroundColor: {
        black: '#233638', 
        white: '#cfd8dc', 
        green: '#a5d6a7', 
        blue: '#0277bd'
    },
    build: {slender, stocky, sporty, skinny},
    pattern: {plain, striped, spotted, patchy},
    size: {small: 100, medium: 140, large: 180, enormous: 220}
};

class DragonAvator extends Component {
    get DragonImage(){
        const dragonPropertyMap = {};
        console.log('dragon',this.props.dragon);
        
        this.props.dragon.traits.forEach(trait => {
            const {traitType, traitValue} = trait;

            console.log('traitType', traitType);
            console.log('traitValue', traitValue);
            
            

            dragonPropertyMap[traitType] = propertyMap[traitType] [traitValue];

            console.log('dragonpropertyMap',dragonPropertyMap[traitType] );
            
            
        });

        const {backgroundColor, build, pattern, size} = dragonPropertyMap;

        const sizing = {width: size, height:size};
        return(
            <div className='dragon-avatar-image-wrapper'>
                <div className='dragon-avatar-image-backgroud' style={{backgroundColor, width:sizing.width, height:sizing.height }}/>
                <img src={pattern} className='dragon-avatar-image-pattern' style={sizing}/>
                <img src={build} className='dragon-avatar-image' style={sizing}/>
            </div>
           
        );
    }

    render(){
        const {generationId, dragonId, traits} = this.props.dragon;

        return(
            <div>
                <span>G{generationId}.</span>
                <span>I{dragonId}. </span>
                {traits.map(trait => trait.traitValue).join(', ')}
                {this.DragonImage}
            </div>
        )
    }

}

export default DragonAvator;
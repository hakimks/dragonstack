import React, {Component} from 'react';
import DragonAvator from './DragonAvator';

const DEFAULT_DRAGON = {
    dragonId: '',
    generationId: '',
    nickname: '',
    birthdate: '',
    traits: []
}
class Dragon extends Component{
    state = {dragon: DEFAULT_DRAGON};

    componentDidMount() {
        this.fetchDragon();
    }

    fetchDragon = () => {
        fetch('http://localhost:3000/dragon/new')
        .then(Response => Response.json())
        .then(json => this.setState({ dragon: json.dragon}))
        .catch(error => console.error('error', error)
        );
    }

    render(){

        return <DragonAvator dragon= {this.state.dragon} />;
    }

}

export default Dragon;
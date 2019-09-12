import React, { Component } from 'react';

class Generation extends Component {
    // constructor() {
    //     this.state = {}
    // }
    state = { generation:{generationId: 898, expiration: '2021-09-01'} };

    componentDidMount() {
        this.fetchGeneration();
    };

    fetchGeneration = () => {
        fetch('http://localhost:3000/generation')
        .then(response => console.log("response", response)
        );
    };

    render() {
        // const generation = this.state.generation;
        const { generation } = this.state;
        return (
            
            <div>
                <h3>Generation {generation.generationId}. Expires on: </h3>
                <h4>{new Date(generation.expiration).toString()}</h4>
            </div>
        )
    }

}

export default Generation;
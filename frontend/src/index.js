import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/dragon';

import './index.css'

const DEFAULT_GENERATION = { generationId: '', expiration: ''};
const GENERATION_ACTION_TYPE = 'GENERATION_ACTION_TYPE';

const generationReducer = (state, action)=>{
    if(action.type === GENERATION_ACTION_TYPE){
        return { generation: action.generation}
    }
    
    return { generation:  DEFAULT_GENERATION };
}

const store = createStore(generationReducer);

console.log('store', store);

store.subscribe(()=> console.log('store state update', store.getState()));

store.dispatch({type: 'foo'});

store.dispatch({
    type: GENERATION_ACTION_TYPE,
    generation: {generationId: 'goo', expiration: 'bar'}
});

const generationActionCreater = (payload) => {
    return{
        type: GENERATION_ACTION_TYPE,
        generation: payload
    };
}

const zooAction = generationActionCreater({
    generationId: 'zoo',
    expiration: 'bars'
});

store.dispatch(zooAction);

fetch('http://localhost:3000/generation')
.then(response => response.json())
.then(json => {
    store.dispatch(generationActionCreater(json.generation))
});

render(
    <div>
        <h2>Dragon Stack</h2>
        <Generation />
        <Dragon />
    </div>,
    document.getElementById('root')
);
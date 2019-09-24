import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/dragon';
import { generationReducer } from './reducers';
import { generationActionCreater} from './actions/generation';

import './index.css';

const store = createStore(
    generationReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

store.subscribe(()=> console.log('store state update', store.getState()));

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
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/Layout/App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render (<App />, rootEl)
}

if (module.hot){
    module.hot.accept('./app/Layout/App', () =>{
        setTimeout(render)
    })
}

render();


// If you want your app to work offline and load faster, you can change

serviceWorker.unregister();

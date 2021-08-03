import React from 'react';
import {render} from 'react-dom';

// router
import { WaterRoute } from './modules/react-router'

// WaterLiu
function Root() {
    return (
        <div id={"water"}>
            <WaterRoute />
            {"WaterLiu Example Project!"}
        </div>
    );
}


/* global document */
render(<Root/>, document.body.appendChild(document.createElement('div')));
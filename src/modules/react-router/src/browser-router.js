import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import Home from './home-page';
import Detail from './detail-page';


class Wrapperextends extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to='/A'>组件A</Link> <br/>
                <Link to='/B'>组件B</Link>
                {this.props.children}
            </div>
        )

    }
}

const WaterRoute = () => (
    <BrowserRouter>
        <Wrapperextends>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Wrapperextends>
    </BrowserRouter>
);

export default WaterRoute;
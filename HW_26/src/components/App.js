import React from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import Battle from './Battle/index';
import Home from './Home';
import Nav from './Nav';
import Popular from './Popular/index';
import Results from './Results';

class App extends React.Component {
    render() {
        return (
            <div className='container'>

            <Routes>
                <Route path='/' element={<Nav/>}>
                    <Route index path='/' element={<Home />}/>
                    <Route path='battle' element={<Battle />}/>
                    <Route path='popular' element={<Popular />}/>
                    <Route path='battle/results' element={<Results />}/>
                </Route>
            </Routes>
            </div>
        )
    }
}

export default App;
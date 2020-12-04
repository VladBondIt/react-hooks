import React from 'react';
import Wrapper from './wrapper';
import MyContext from './context';

import './app.scss';


function App() {
    return (
        <div className="app">
            {/* Важно указывать ввиде пропса значение с ключевым словом value, по другому будет ошибка */}
            {/* <MyContext.Provider value={'Vlad'}> */}
            <MyContext.Provider value={{
                name: 'Vlad',
                age: 30
            }}>
                <Wrapper />
            </MyContext.Provider>
        </div>
    )
}

export default App;
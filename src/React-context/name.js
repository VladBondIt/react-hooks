
import React, { Component } from 'react';
import MyContext from './context';

import './name.scss';

// Функцианальный способ передачи пропсов через контекст
// const Name = () => {
//     return (

//         <MyContext.Consumer>
//             {
//                 (value) => {
//                     return (
//                         <div className="name">
//                             My name is {value}
//                         </div>
//                     )
//                 }
//             }
//         </MyContext.Consumer>


//     )
// }

// Классовый подход передачи пропсов через контекст
class Name extends Component {
    render() {
        return (
            <div className="name">
                My name is {this.context.name}, age {this.context.age}
            </div>
        )
    }
}

// Указваем какой контекст мы должны использовать на этом компоненте

Name.contextType = MyContext;

export default Name;
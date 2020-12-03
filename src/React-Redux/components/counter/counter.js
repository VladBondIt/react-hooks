import React from 'react';
// Функция Коннетк позволяет связать компонент с глобал стейтом т.е. store
// через Provider.
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="wrap">
            <h1 className="counter">{counter}</h1>
            <button onClick={inc} className="btn">Incr</button>
            <button onClick={dec} className="btn">Decr</button>
            <button onClick={rnd} className="btn">Rnd</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}



// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// }
// Функция connect принимает параметры конфигурации(что нужно передать из стора) и принимает компонент,
// она возвращает обернутый в функцию компонент.
export default connect(mapStateToProps, actions)(Counter);


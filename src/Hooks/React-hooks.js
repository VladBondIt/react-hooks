import React, { useState, useEffect } from 'react';
import './React-hooks.scss';

// Хуки юзаються только из функцианальных компонентов,
// в классовых компонентах хуки вызывают ошибку, также хуки нельзя помещать в циклы, условия
// и вложенные функции.
function ReactHooks() {
  // useState возвращает массив, деструктуризируем объект, setCount кастомная функция
  // которая изменяет стейт
  const [count, setCount] = useState(0);
  const [data, refreshData] = useState([{ name: 'Ivan', sex: 'male' }]);

  useEffect(() => {
    // console.log(parseInt(Math.random() * 120));
    // console.log(data);
    // updateChar();
    // // Имитация решения проблемы утечки памяти, когда контент скрывается,
    // // а интервал продолжает забивать память.
    // let timerId = setInterval(updateChar, 5000)
    // return () => {
    //   clearInterval(timerId)
    // }
  })

  return (
    <div className="App">
      <h1>Hello friends!</h1>
      <p>Вы кликнули {count} раз</p>
      <button
        onClick={() => setCount(count + 1)}>Кликни меня</button>
      {data.map(item => {
        return (
          <div key={(Math.random() * 1000).toFixed(4)}>Name: {item.name}, sex: {item.sex}</div>
        )
      })}
      <button
        onClick={() => refreshData(data => ([...data, { name: 'Alex', sex: 'male' }]))} >
        Добавить данные
      </button>
    </div>
  );
}

export default ReactHooks;

import React from 'react';

// СОздаем контекс, в метод createContext можно передать аргумен,
// он будет выступать значением по умолчанию для консюмера, если не найдет провадера.
const MyContext = React.createContext();

// Внутри MyContext лежит объект в котором есть провайдер и консюмер.
export default MyContext;
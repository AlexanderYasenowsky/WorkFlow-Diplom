import tasksReducer, {addTask, deleteTask, changeStatus} from './tasks-reducer';
import React from 'react';
it('Добавление новой задачи', ()=>{
  let initialData ={
    tasks: [
      {id: 1, name: 'Проектирование ИС', registrar: 'Вадим', recipient:'Олег', status: 1}
    ],
    newTask:{
      name: "Строительство метро",
      registrar:"Алексей",
      recipient:"Иван",
      description:"Согласовать"
    }
  }
  let action = addTask();
  let newState = tasksReducer(initialData,action);
  expect(newState.tasks.length).toBe(2);
  expect(newState.tasks[1].name).toBe('Строительство метро');
})

it('Удаление задачи', ()=>{
  let initialData ={
    tasks: [
      {id: 1, name: 'Проектирование ИС', registrar: 'Вадим', recipient:'Олег', status: 1},
      {id: 2, name: 'Строительво метро', registrar: 'Алексей', recipient:'Иван', status: 0}
    ]
  }
  let action = deleteTask(1);
  let newState = tasksReducer(initialData,action);
  expect(newState.tasks.length).toBe(1);
})

it('Изменить статус задачи', ()=>{
  let initialData ={
    tasks: [
      {id: 1, name: 'Проектирование ИС', registrar: 'Вадим', recipient:'Олег', status: 1},
      {id: 2, name: 'Строительво метро', registrar: 'Алексей', recipient:'Иван', status: 0}
    ]
  }
  let action = changeStatus(1,2);
  let newState = tasksReducer(initialData,action);
  expect(newState.tasks[1].status).toBe(2);
})

import userReducer, {changeUserInSystem,getNames}  from './users-reducer';
import React from 'react';
it('Авторизация пользователя в системе', ()=>{
  let initialData ={
    userInSystem:
    {
      name:"",
      isLogged: false,
      post: "",
      token: "",
      surname: "",
      patronymic: "",
      login: ""
    }
  }
  let action = changeUserInSystem("Сергей", true, 1, "asde26", "Трушин", "Олегович", "gsa@yandex.ru");
  let newState = userReducer(initialData,action);
  expect(newState.userInSystem.name).toBe('Сергей');
  expect(newState.userInSystem.isLogged).toBe(true);
  expect(newState.userInSystem.post).toBe(1);
  expect(newState.userInSystem.token).toBe('asde26');
  expect(newState.userInSystem.surname).toBe('Трушин');
  expect(newState.userInSystem.patronymic).toBe('Олегович');
  expect(newState.userInSystem.login).toBe('gsa@yandex.ru');
})

it('Получить имена', ()=> {
  let initialData ={
    names: ''
  }
  let namesToAdd = ['Миша', 'Олег','Василий']
  let action = getNames(namesToAdd);
  let newState = userReducer(initialData,action);
  expect(newState.names[0]).toBe('Миша');
  expect(newState.names[1]).toBe('Олег');
  expect(newState.names[2]).toBe('Василий');
})

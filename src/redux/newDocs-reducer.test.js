import newDocsReducer, {addNewDocumentAction,deleteDoc, changeFileName, changeInputFinish, changeDescription,sortByTheme} from './newDocs-reducer';
import React from 'react';
it('Регистрация документа', ()=>{
  let initialData ={
    table:[
      {id: 1, registrar:"Александр",created:"2020-05-31",recipient:"Сергей",theme:"Строительво ЖК",
      execution:"2020-09-30",form:"Согласование",description:"Согласовать и передать на подпись",file:"file.docx"}
    ],
    newDocument:{
      id: 2,
      registrar: "Иван",
      created:"2020-03-10",
      recipient: "Алексей",
      theme: "Разработка контроллера",
      execution: "2020-05-15",
      form: "Согласовать",
      description: "Требуется проверить документ",
      file :"Контроллер.doc"
    },
  }
  let action = addNewDocumentAction();
  let newState = newDocsReducer(initialData,action);
  expect(newState.table.length).toBe(2);
  expect(newState.table[1].theme).toBe('Разработка контроллера');
  expect(newState.table[1].file).toBe('Контроллер.doc');
})

it('Удаление документа', ()=>{
  let initialData ={
    table:[
      {id: 1, registrar:"Александр",created:"2020-05-31",recipient:"Сергей",theme:"Строительво ЖК",
      execution:"2020-09-30",form:"Согласование",description:"Согласовать и передать на подпись",file:"file.docx"},
      {id: 2, registrar:"Алексей",created:"2020-05-31",recipient:"Сергей",theme:"Разработка контроллера",
      execution:"2020-09-30",form:"Согласование",description:"Согласовать и передать на подпись",file:"Контроллер.docx"}
    ],
  }
  let action = deleteDoc(1);
  let newState = newDocsReducer(initialData,action);
  expect(newState.table.length).toBe(1);
})

it('Изменение привязанного файла', ()=>{
  let initialData ={
    table:[
      {id: 1, registrar:"Александр",created:"2020-05-31",recipient:"Сергей",theme:"Строительво ЖК",
      execution:"2020-09-30",form:"Согласование",description:"Согласовать и передать на подпись",file:"file.docx"},
      {id: 2, registrar:"Алексей",created:"2020-05-31",recipient:"Сергей",theme:"Разработка контроллера",
      execution:"2020-09-30",form:"Согласование",description:"Согласовать и передать на подпись",file:"Контроллер.docx"}
    ]
  }
  let action = changeFileName("Controller.docx",1);
  let newState = newDocsReducer(initialData,action);
  expect(newState.table[1].file).toBe('Controller.docx');
})

it('Завершение задачи', ()=>{
  let initialData ={
    table:[
      {id: 1, registrar:"Александр",created:"2020-05-31",recipient:"Сергей",theme:"Строительво ЖК",
      execution:"2020-09-30",form:"Согласование",description:"Согласовать и передать на подпись",file:"file.docx", finished: 0}
    ]
  }
  let action = changeInputFinish(1,0);
  let newState = newDocsReducer(initialData,action);
  expect(newState.table[0].finished).toBe(1);
})


it('Изменить описание', ()=>{
  let initialData ={
    table:[
      {id: 1, registrar:"Александр",created:"2020-05-31",recipient:"Сергей",theme:"Строительво ЖК",
      execution:"2020-09-30",form:"Согласование",description:"Согласовать и передать на подпись",file:"file.docx", finished: 0}
    ]
  }
  let action = changeDescription("Готово",0);
  let newState = newDocsReducer(initialData,action);
  expect(newState.table[0].description).toBe("Готово");
})

it('Сортировка по теме', () => {
  let initialData ={
    inputToFind:{
      value: "Проект",
      key: ""
    },
    themeToFind:{
      theme: ""
    }
  }
  let action = sortByTheme();
  let newState = newDocsReducer(initialData,action);
  expect(newState.inputToFind.value).toBe("Проект");
})

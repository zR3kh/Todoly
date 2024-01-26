import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoElement from './components/TodoElement';
import CreateTodo from './components/CreateTodo';
import React from 'react';

function App() {

  const statusArray = ['Pending', 'Todo', 'Done'];
  const dummyData = [
    {todo: 'Let the dogs out', status: statusArray[0], id: 0},
    {todo: 'Yawn', status: statusArray[0], id: 1},
    {todo: 'Go see the sun', status: statusArray[0], id: 2},
    {todo: 'Buy food', status: statusArray[0], id: 3},
  ];

  const [data, setData] = React.useState(dummyData);
  const [isCreating, setIsCreating] = React.useState(false)

  /**
   * Change the current status of the selected todo
   * @param {number} id 
   */
  const changeTodoStatus = (id) => {
    let currentStatus = data[id].status;
    let currentIndex = statusArray.indexOf(currentStatus);
    let nextStatusValue = statusArray[currentIndex + 1];
    let initialStatusValue = statusArray[0];
    setData(prevData => {
      const updatedData = [...prevData];
      if (statusArray[currentIndex + 1] != undefined) {
        updatedData[id].status = nextStatusValue;
      } else {
        updatedData[id].status = initialStatusValue;
      }
      return updatedData;
    })
  }

  /**
   * Show or hide the todo creation part
   */
  const handleCreateTodo = () => {
    setIsCreating(prevValue => !prevValue);
  }

  /**
   * Update todolist
   * @param {string} text 
   * @param {string} status 
   */
  const addTodoElement = (e, text, status) => {
    e.preventDefault();
    handleCreateTodo();
    setData(prevData => {
      return [
        ...prevData,
        {todo: text, status: status, id: data.length}
      ]
    })
  }

  return (
    <div className='app'>
      <div className='app__todo-list'>
        <ul>
          { data.map(el => <TodoElement key={el.id} data={el} changeTodoStatus={changeTodoStatus}/>) }
        </ul>
      </div>
      <div className='app__create-todo'>
        {!isCreating 
        ?
        <button type='button' className='btn btn-primary' onClick={handleCreateTodo}>Create Todo</button>
        :
        <div>
          <button type='button' className='btn btn-danger' onClick={handleCreateTodo}>Cancel Todo</button>
          <CreateTodo addTodoElement={addTodoElement}/>
        </div>
        }
      </div>
    </div>
  );
}

export default App;

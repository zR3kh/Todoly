import React from "react";
import './CreateTodo.css'

export default function (props) {

  const [textValue, setTextValue] = React.useState('');
  const [status, setStatus] = React.useState('Pending');

  /**
   * Set text
   * @param {event} e 
   */
  const handleText = (e) => {
    setTextValue(e.target.value);
  }
  /**
   * Set status
   * @param {event} e 
   */
  const handleStatus = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form onSubmit={(e) => props.addTodoElement(e, textValue, status)}>
        <div>
            <input type='text' id='todo-text' value={textValue} onChange={handleText} required='required' placeholder="Card name here..."/>
        </div>
        <div className="radio-list">
          <div>
            <input
              type='radio' 
              value={'Pending'} 
              onChange={handleStatus}
              name='status' 
              id='todo-status'
              checked={status === 'Pending'}
            />
            <p>Pending</p>
          </div>
          <div>
            <input 
              type='radio' 
              value={'Todo'} 
              onChange={handleStatus}
              name='status' 
              id='todo-status'
              checked={status === 'Todo'}
            />
            <p>Todo</p>
          </div>
          <div>
            <input 
              type='radio' 
              value={'Done'} 
              onChange={handleStatus}
              name='status' 
              id='todo-status'
              checked={status === 'Done'}
            />
            <p>Done</p>
          </div>
        </div>
        <div>
            <button type='submit' className='btn btn-success create-btn'>Create</button>
        </div>
    </form>
  )
}

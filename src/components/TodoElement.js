import './TodoElement.css'

export default function (props) {
  return (
    <div className='todo-element' style={{ alignSelf: props.data.status === 'Todo' ? 'center' : props.data.status === 'Done' ? 'end' : 'start'}}>
        <p className='todo-element__todo-text'>{props.data.todo}</p>
        <p className='todo-element__todo-status' onClick={() => props.changeTodoStatus(props.data.id)}>{props.data.status}</p>
    </div>
  )
}

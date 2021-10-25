import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Task = ({ task, deleteTask, toggleReminder }) => {
  const handleOnClickFaTimes = () => deleteTask(task.id)
  const handleOnDoubleClick = () => toggleReminder(task.id)

  const styleFaTimes = { color: 'red', cursor: 'pointer' }
  const className = `task ${task.reminder ? 'reminder' : ''}`
  const { text, day } = task

  return (
    <div
      className={className}
      onDoubleClick={handleOnDoubleClick}
    >
      <h3>
        {text}
        <FaTimes
          style={styleFaTimes}
          onClick={handleOnClickFaTimes}
        />
      </h3>
      <p>{day}</p>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
  toggleReminder: PropTypes.func
}

Task.defaultProps = {
  task: { id: -1, text: 'DEFAULT TEXT', day: 'Jan 0 0:00am' },
  deleteTask: () => console.log('DEFAULT deleteTask()'),
  toggleReminder: () => console.log('DEFAULT toggleReminder()')
}

export default Task

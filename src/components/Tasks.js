import Task from './Task'
import PropTypes from 'prop-types'

const Tasks = ({ tasks, deleteTask, toggleReminder }) => {
  return (
    <>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
  toggleReminder: PropTypes.func
}

Tasks.defaultProps = {
  tasks: [{ id: -1, text: 'DEFAULT TEXT', day: 'Jan 0 0:00am' }],
  deleteTask: () => console.log('DEFAULT deleteTask()'),
  toggleReminder: () => console.log('DEFAULT toggleReminder()')
}

export default Tasks

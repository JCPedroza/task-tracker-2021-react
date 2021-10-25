import { useState } from 'react'

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const clearForm = () => {
    setText('')
    setDay('')
    setReminder(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (text) {
      addTask({ text, day, reminder })
      clearForm()
    } else {
      window.alert('Please add a task')
    }
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Day and time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Save task' className='btn btn-block' />
    </form>
  )
}

export default AddTask

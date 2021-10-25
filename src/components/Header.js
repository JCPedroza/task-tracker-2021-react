import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import Button from './Button'

const Header = ({ title, showAddTask, toggleShowAddTask }) => {
  const location = useLocation()

  const buttonText = showAddTask ? 'Close' : 'Add'
  const buttonColor = showAddTask ? 'red' : 'green'

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' &&
        <Button
          onClick={toggleShowAddTask}
          color={buttonColor}
          text={buttonText}
        />}
    </header>
  )
}

Header.defaultProps = {
  title: 'DEFAULT TITLE'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header

import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  const style = { backgroundColor: color }

  return (
    <button
      onClick={onClick}
      style={style}
      className='btn'
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'white',
  text: 'DEFAULT TEXT',
  onClick: () => console.log('DEFAULT CLICK HANDLER')
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Button

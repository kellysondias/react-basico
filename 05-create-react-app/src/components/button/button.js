import './button.css'

const sayHello = () => {
    console.log('olá')
}

const Button = ({label}) => {
    return <button className='btn' onClick={sayHello}>{label}</button>
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button
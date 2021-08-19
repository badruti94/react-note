import './button.css'

const Button = ({title, onClick, color}) => {
    return (
        <button className={['btn',color].join(' ')} onClick={onClick} >{title}</button>
    )
}

export default Button

// importar el css a la pagina donde van los botones import './Boton.css';
import './Boton.css';

function Boton(props) {
    return (
        <div className="center">
            <button className={props.class} onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}


export default Boton;
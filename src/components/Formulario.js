import React from 'react';
import PropTypes from 'prop-types';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'tecnology', label: 'Tecnología'}
    ];

    //Utilizar custom Hook.
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //Submit al form, se pasa la categoria al componente principal App.js.
    const buscarNoticias = e => {
        e.preventDefault();

        setCategoria(categoria);
    }


    return ( 

        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>
                     
                    <SelectNoticias/>

                    <div className="input-field col s12 ">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darker-2`}
                            value="buscar"
                         />
                    </div>
                </form>
            </div>
        </div>

     );
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
 
export default Formulario;
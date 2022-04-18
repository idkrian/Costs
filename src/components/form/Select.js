import styles from './stylesheets/Select.module.css'

function Select({ text, name, options, handleonChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select
                name={name}
                id={name}
            >
                <option disabled selected>
                    Selecione a Categoria
                </option>
            </select>
        </div>
    )
}

export default Select
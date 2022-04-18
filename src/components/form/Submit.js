import styles from './stylesheets/Submit.module.css'

function Submit({ text }) {
    return (
        <div className={styles.form_control}>
            <button className={styles.btn}>
                {text}
            </button>
        </div>
    )
}

export default Submit
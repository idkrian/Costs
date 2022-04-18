import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './stylesheets/Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copyright}>
                <span>Costs</span> &copy; 2022
            </p>
        </div>
    )
}

export default Footer
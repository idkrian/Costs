import { FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section className={styles.section}>
      <h1>Contato</h1>
      <h4>Você pode me encontrar no meu:</h4>
      <h4><a href="https://github.com/idkrian" target={'_blank'}> <FaGithub /> GitHub </a></h4>
      <h4><a href="https://www.linkedin.com/in/riansouza/" target={'_blank'}> <FaLinkedin /> LinkedIn </a></h4>
    </section>
  );
}

export default Contact;

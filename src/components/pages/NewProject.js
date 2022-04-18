import React from 'react'
import styles from './stylesheets/NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para dpeois adicionar os serviços</p>
            <p>Formulário</p>
            <ProjectForm />
        </div>
    )
}

export default NewProject
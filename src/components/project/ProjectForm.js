import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import styles from './stylesheets/ProjectForm.module.css'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <div>
                <Input
                    type="text"
                    text='Nome do Projeto'
                    name='name'
                    placeholder='Insira o nome do Projeto'
                />
            </div>
            <div>
                <Input
                    type="number"
                    text='Orçamento do Projeto'
                    name='name'
                    placeholder='Insira o orçamento do Projeto'
                />
            </div>
            <div>
                <Select
                    name="category_id"
                    text='Selecione a Categoria'

                >
                </Select>
            </div>
            <div>
                <Submit text={btnText}/>
            </div>
        </form>
    )
}

export default ProjectForm
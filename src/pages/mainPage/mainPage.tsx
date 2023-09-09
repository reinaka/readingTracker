import { AddBookForm } from "../../components/addBookForm/addBookForm";
import { Block } from "../../components/block/block";
import { IN_PROCESS, READ, TO_READ  } from "../../services/constants";
import styles from './mainPage.module.css'

export const MainPage = () => {
    return (
        <>
            <div className={styles.formWrapper}>
                <AddBookForm />
            </div>
            <div className={styles.layout}>
                <Block title="Прочесть" category={TO_READ}/>
                <Block title="В процессе" category={IN_PROCESS}/>
                <Block title="Прочтены" category={READ}/>
            </div>
        </>
    )
}
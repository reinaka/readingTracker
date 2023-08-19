import styles from './App.module.css';
import { AddBookForm } from './components/addBookForm/addBookForm';
import { Block } from './components/block/block';
import { IN_PROCESS, READ, TO_READ } from './services/constants';

function App() {
  return (
    <>
      <AddBookForm />
      <div className={styles.layout}>
        <Block title="Прочесть" category={TO_READ}/>
        <Block title="В процессе" category={IN_PROCESS}/>
        <Block title="Прочтены" category={READ}/>
      </div>
    </>
  );
}

export default App;

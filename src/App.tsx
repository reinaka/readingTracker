import styles from './App.module.css';
import { Block } from './components/block/block';
import { BookCard } from './components/bookCard/bookCard';

function App() {
  return (
    <div className={styles.layout}>
      <Block title="Прочесть">
        <BookCard title="book1" author="author1" year={1973}/>
        <BookCard title="book2" author="author2" year={1972}/>
      </Block>
      <Block title="В процессе">
        <BookCard title="book1" author="author1" year={1973}/>
        <BookCard title="book2" author="author2" year={1972}/>
      </Block>
      <Block title="Прочтены">
        <BookCard title="book1" author="author1" year={1973}/>
        <BookCard title="book2" author="author2" year={1972}/>
      </Block>
    </div>
  );
}

export default App;

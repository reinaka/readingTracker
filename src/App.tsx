import styles from './App.module.css';
import { NavigationPanel } from './components/navigationPanel/navigationPanel';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/mainPage/mainPage';
import { FavoriteBooksPage } from './pages/likedBooksPage/favoriteBooksPage';

function App() {
  return (
    <div className={styles.general}>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/favorites" element={<FavoriteBooksPage />}/>
      </Routes>
      <NavigationPanel />
    </div>
  );
}

export default App;

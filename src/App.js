import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import CardContainer from './components/Card/CardContainer';
import Counter from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList';
import { createContext, useState } from 'react';

export const UserContext = createContext()
function App() {
  const [user, SetUser] = useState('Hasan')
  return (
    <UserContext.Provider value={user}>
      <Navbar user={user} />
      <HeroSection />
      <CardContainer />
      <TodoList />
    </UserContext.Provider>
  );
}

export default App;

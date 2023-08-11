import { useState } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import { Plus } from 'react-feather';
import styles from './styles/pages/home.module.css'
import {Task} from './components/task/index'

function App() {
  const [count, setCount] = useState(0)
  //espinha do projeto
  return (
    <div className="App">
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>Minhas tarefas</h1>
         <button type="button" className={styles.addTaskButton}>
             Adicionar uma nova tarefa
           <Plus>
           </Plus>
         </button>
        </header>
     
        <div className={styles.tasks}><Task></Task></div>
     
        
      </section>



    </div>
  )
}

export default App

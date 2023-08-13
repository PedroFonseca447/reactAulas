import {useState} from 'react'
import {Task} from 'vite-project/src/components/task/index'
import { Plus } from "react-feather"
import { ITaskProps } from 'vite-project/src/components/Task/types'
 
import styles from "./styles/pages/home.module.css"
 
import { CreateTaskModal } from './components/Task'
 
import Modal from "react-modal"
 
Modal.setAppElement("#root")

function App() {
  const isCreateTaskModalOpen = false;
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

    <CreateTaskModal isOpen={isCreateTaskModalOpen}></CreateTaskModal>

    </div>
  )
}

export default App

import Modal from "react-modal";
import { X } from "react-feather";
import syles from "./styles.module.css";


export function CreateTaskModal({isOpen}){
    return(
        <Modal isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName={overlayClassName}
            className={styles.container}>
            <button type="button"
            onClick={()=> onRequestClose}
            className={styles.closeButton}>
                <X size={16}/>
            </button>
            <h1>Adicionar tarefa</h1>
            <form onSubmit={handleCreateNewTask}>
                <label htmlFor="task">Título da tarefa</label>
                <input 
                type="text"  
                name="task" 
                placeholder="Digite aqui"
                value={newTask}
                >
                
                
                </input>

                <button type="submit" className={styles.button}>
                    
                </button>
            </form>
        </Modal>
    )
}


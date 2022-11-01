import styles from './Tasks.module.css'
import clipboard from '../assets/Clipboard.svg'
import { SingleTask } from './SingleTask'
import { NewTask } from './NewTask'
import { useState } from 'react'

export function Tasks(){
  let [allTasks,setAllTasks] = useState<any[]>([]);
  let tasksCreated = allTasks.length;
  let tasksConcluded = allTasks.filter((task) => task.checked ).length

  function insertNewTask(task:string){
    let taskObj = {'content':task,'checked':false}
    setAllTasks([...allTasks,taskObj])
  }

  function toggleCheckTask(indexOfTaskToToggle:number) {
    let tasksCopy = [...allTasks];
    tasksCopy[indexOfTaskToToggle].checked = !tasksCopy[indexOfTaskToToggle].checked
    setAllTasks(tasksCopy);
  }

  function deleteTask(indexOfTaskToDelete:number) {
    let tasksCopy = [...allTasks]
    tasksCopy.splice(indexOfTaskToDelete,1)
    setAllTasks(tasksCopy);
  }

  return (
    <div>
      <NewTask insertNewTask={insertNewTask}/>
      <div className={styles.tasks}>
        <header>
          <div>
            <label>Tarefas criadas</label>
            <p>
              {tasksCreated}
            </p>
          </div>
          <div>
            <label>
              Concluídas  
            </label>
            <p>
             {tasksCreated==0 ? '0' : `${tasksConcluded} de ${tasksCreated}`}
            </p>
          </div>
        </header>
        {
          tasksCreated==0 ? 
            <footer>
              <img src={clipboard} />
              <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </footer>
          : allTasks.map( (v,i) => 
            <SingleTask 
              key={i} 
              index={i} 
              task={v.content} 
              checked={v.checked} 
              toggleCheckTask={toggleCheckTask}
              deleteTask={deleteTask}
            />
          )
        }   
      </div>
    </div>
  )
}
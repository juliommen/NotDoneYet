
import styles from "./NewTask.module.css"
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface propsInterface {
  insertNewTask: (task:string) => void
}

export function NewTask ({insertNewTask}:propsInterface){

  let [taskInput,setTaskInput] = useState("");

  function handleTaskInput(event: ChangeEvent<HTMLInputElement>){
    let input = event.target.value
    setTaskInput(input)
  }

  function handleInsertNewTask(event: FormEvent){
    event.preventDefault()
    insertNewTask(taskInput)
    setTaskInput("")
  }

  return (
    <form className={styles.newTask} onSubmit={handleInsertNewTask}>
      <input placeholder="Adicione uma nova tarefa" value={taskInput} onInput={handleTaskInput} required/>
      <button type="submit">
        <p>Criar</p> 
        <PlusCircle/>
      </button>
    </form>
  )
}
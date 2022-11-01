import styles from './SingleTask.module.css'
import { Trash , Circle, CheckCircle} from "phosphor-react";

interface propsInterface {
    task: string,
    checked:boolean,
    index: number,
    toggleCheckTask: (indexOfTaskToToggle:number) => void,
    deleteTask: (indexOfTaskToDelete:number) => void
}


export function SingleTask({task,checked, index,toggleCheckTask, deleteTask}:propsInterface){

    function handleCheckTask(){
        toggleCheckTask(index);
    }

    function handleDeleteTask(){
        deleteTask(index)
    }

    return (
        <div className={styles.singleTask} >
            { !checked ? 
                <Circle size={24} className={styles.uncheckedIcon} onClick={handleCheckTask}/>
              : 
                <div className={styles.checkedIcon} onClick={handleCheckTask}>
                    <CheckCircle size={24}   weight="fill"/>
                    <div></div>
                </div> 
            }
            { checked ?
            <label className={styles.uncheckedLabel}> 
            {task}
        </label> 
        :
        <label> 
        {task}
    </label> 


            }
        
            <Trash size={24}  className={styles.trashIcon} onClick={handleDeleteTask}/>
        </div>
    )
}

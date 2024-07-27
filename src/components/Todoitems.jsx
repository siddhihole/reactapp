import Todoitem from "./Todoitem";
import styles from "./Todoitem.module.css";
const Todoitems =({todoIitems , onDeleteClick}) =>{
    return <>
    <div className={styles.itemsContainer}>
        {todoIitems.map(item => <Todoitem tododate={item.dueDate} todoname={item.name} Click={onDeleteClick}></Todoitem>)}
    
    </div>
    </>
};
export default Todoitems;
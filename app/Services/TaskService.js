import Task from "../Models/Task.js";
import store from "../store.js";

//Public
class TaskService {
  removeItem(id, name) {
    let task = store.State.tasks.find(t => t.id == id)
    let itemIndex = task.listItems.findIndex(i => i == name)
    task.listItems.splice(itemIndex, 1)
  }
  createItem(rawItem, id) {
   let task = store.State.tasks.find(t => t.id == id)
   task.listItems.push(rawItem) 
  }
  removeTask(id) {
    store.State.tasks = store.State.tasks.filter(t => t.id != id)
  }
  createTask(rawTask) {
    let newTask = new Task(rawTask);
    store.State.tasks.push(newTask);
  }

  saveState() {
    store.saveState()
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new TaskService();
export default SERVICE;

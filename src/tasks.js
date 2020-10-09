console.log("from the tasks js")
const taskLink = "http://localhost:3000/tasks"

class Task{
    
    
    static allTasks(){
            api.allTasks()
                .then(obj => obj.forEach(task => renderTask(task)))
            }


    static singleTask(task){
            const div = document.createElement("div") 
            div.setAttribute("task-class", jsonObj.id )
            const description = document.createElement("p")
            description.innerHTML = jsonObj.description
            const urgency = document.createElement("p")
            urgency.innerHTML = jsonObj.urgency
        
            const deleteTask = document.createElement("button") 
            deleteTask.innerHTML = "Completed Task" 
        
            deleteTask.addEventListener("click", (e) => {
                e.preventDefault()
                div.remove() 
        
                api.deleteTask(jsonObj)
                .then(obj => console.log(obj))
            })
            
            urgency.innerHTML = jsonObj.urgency
            description.innerHTML = jsonObj.description
            div.appendChild(description)
            div.appendChild(urgency)
            div.appendChild(deleteTask)
            taskDiv.appendChild(div)
            }

    }

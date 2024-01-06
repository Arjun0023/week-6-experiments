import { useState } from "react";

function App(){
    const [todos , setTodos] = useState([{
        title:"Go to gym",
        description:"need to hit the gym from 4-6PM"
    },{
        title:"Go to class",
        description:"Need to go to class 7-9pm"
    },{
        title:"eat food",
        description:"eat 9-10pm"
    }])
    return(
        <div>
        {todos.map(todo => <Todo Title={todo.title} description={todo.description}/>)}
        </div>
    )
}

function Todo({title, description}) {
    return <div>
      <h1>
        {title}
      </h1>
      <h4>
        {description}
      </h4>
    </div>
  }

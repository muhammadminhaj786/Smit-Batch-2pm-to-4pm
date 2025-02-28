import { useState } from "react"


export const Todo =()=> {

    const list1 = [1,2,3,4,5]
    const list2 = [...list1, 6]
    console.log(list2)
    console.log(list1)


    let [item, setItem] = useState('')
    let [tasks, setTasks] = useState([])

    function addTask (){
        console.log('add task', item)
        // tasks.push(item)
        setTasks([...tasks, item])
        // console.log(tasks)
    }

    function inputChange(val){
        
        console.log('change',val)
        // item = val
        setItem(val)
    }


    return (
        <div>
            <div className="w-[80%] flex gap-2 mx-auto mt-4">
                <input onChange={(e)=> {inputChange(e.target.value)}}  className="flex-1  border-2 h-[50px] border-slate-500 rounded-lg p-2" type="text" placeholder="Enter a task..." />
                <button onClick={addTask} className="h-[50px] w-[130px] text-white bg-green-500 rounded-lg hover:bg-green-600">Add Task</button>
            </div>
            <div className="mt-4 w-[80%] mx-auto p-2">
                <ul>
                    {/* <li className="bg-slate-300 h-[60px] p-4 text-slate-700 rounded-lg">{item}</li> */}
                    {
                        tasks.map((todo, index)=> {
                            return (
                                <li key={index} className="bg-slate-300 h-[60px] p-4 text-slate-700 rounded-lg mb-4">{todo}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
import { useState } from "react"


export const Todo =()=> {

    const list1 = [1,2,3,4,5]
    const list2 = [...list1, 6]
    console.log(list2)
    console.log(list1)



    let [item, setItem] = useState('')
    let [tasks, setTasks] = useState([])

    function addTask (){

        // if(item === ""){
        //     alert("Todo is required")
        //     return
        // }

        item === "" ? alert('Todo is required') : (console.log('add task', item),
         setTasks([...tasks, item]),
         setItem(""))

        
        // tasks.push(item)
        
        // console.log(tasks)
        
    }

    function inputChange(e){
        
        console.log('change',e)
        // item = val
        setItem(e)
    }

    function changeStatue (){
        console.log('change')
    }


    return (
        <div>
            <div className="w-[80%] flex gap-2 mx-auto mt-4">
                <input value={item} onChange={(e)=>inputChange(e.target.value)}  className="flex-1  border-2 h-[50px] border-slate-500 rounded-lg p-2" type="text" placeholder="Enter a task..." />
                <button onClick={addTask} className="h-[50px] w-[130px] text-white bg-green-500 rounded-lg hover:bg-green-600">Add Task</button>
            </div>
            <div className="mt-4 w-[80%] mx-auto p-2">
                <ul>
                    {/* <li className="bg-slate-300 h-[60px] p-4 text-slate-700 rounded-lg">{item}</li> */}
                    {
                        tasks.map((todo, index)=> {
                            return (
                                <li key={index} className="bg-slate-300 h-[60px] p-4 text-slate-700 rounded-lg mb-4 flex justify-between items-center">
                                    <p>
                                        {
                                            todo
                                        }
                                    </p>
                                    <button onClick={changeStatue} className="bg-slate-400 rounded-lg w-[100px] h-[35px]">
                                        Complete
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
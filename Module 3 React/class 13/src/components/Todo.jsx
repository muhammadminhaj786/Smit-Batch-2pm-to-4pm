import { useState } from "react"


export const Todo =()=> {

    // const list1 = [1,2,3,4,5,6,7]
    // const list2 = [...list1, 0]

    // console.log(list1)
    // console.log(list2)



// [
//     {value: 'asd', status: false, id:1}
// ]


    let [item, setItem] = useState('')
    let [tasks, setTasks] = useState([])

    

    function addTask (){

        // if(item === ""){
        //     alert("Todo is required")
        //     return
        // }

        item === "" ? alert('Todo is required') : (console.log('add task', item))
        //  setTasks([...tasks, item])
        setTasks([...tasks,{value: item, status: false}])
        // console.log(tasks)
  
    
      
        
        //  setItem(""),
   


        
        // tasks.push(item)
        
        // console.log(tasks)
        
    }


    // const list = [1,2,3,4,5]
    // list.map((val, i)=> {
    //     console.log("value",val, "index:",i)
    // })


    // tasks =[
    //    { item:"morning",status:false}, {item:"gotogym",status:true}
    // ]

    // todo => { item:"morning",status:false},
    // index => 0
  
   
//    {
//     todo.item
//    }

    function inputChange(e){
        
        console.log('change',e)
        // item = val
        setItem(e)
    }

    function changeStatus (index){
        
        console.log('index',index)
        // console.log(tasks[index])

        // for(var i=0;i<tasks.length;i++){
        //     console.log(tasks[i])
        // }

        // const statusFind = tasks.map((todoItem, i)=> {
        //     index === i ? {...value, status: !status } : todoItem
        // })

    //    console.log(tasks)
       
    //    for(var i=0; i<tasks.length; i++){
    //         console.log(tasks[i])
            
    //         tasks[i]=== 

    //    }

    // if(index === tasks[index]){
    //     console.log("true")
    //     console.log(tasks[index])
    // }else{
    //     console.log("false")
    //     console.log(tasks[index])
    // }

  

    }


    return (
        <div>
            <div className="w-[80%] flex gap-2 mx-auto mt-4">
                <input  onChange={(e)=>inputChange(e.target.value)}  className="flex-1  border-2 h-[50px] border-slate-500 rounded-lg p-2" type="text" placeholder="Enter a task..." />
                <button onClick={addTask} className="h-[50px] w-[130px] text-white bg-green-500 rounded-lg hover:bg-green-600">Add Task</button>
            </div>
            <div className="mt-4 w-[80%] mx-auto p-2">
                <ul>
                    {/* <li className="bg-slate-300 h-[60px] p-4 text-slate-700 rounded-lg">{name}</li> */}
                    {
                        tasks.map((todo, index)=> {
                            return (
                                <li key={index} className="bg-slate-300 h-[60px] p-4 text-slate-700 rounded-lg mb-4 flex justify-between items-center">
                                    <p className={`${todo.status ? "line-through" : "" } `}>
                                      {todo.value}
                                    </p>
                                    <button onClick={()=>changeStatus(index)} className="bg-slate-400 rounded-lg w-[100px] h-[35px] hover:bg-slate-500 cursor-pointer">
                                        {
                                            todo.status ? 'completed' : 'complete'
                                        }
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
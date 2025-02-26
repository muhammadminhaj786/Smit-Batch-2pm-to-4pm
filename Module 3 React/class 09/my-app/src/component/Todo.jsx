

export const Todo =()=> {

    function addTodo(){
        console.log('chala')
    }

    function inputChange(){
        console.log('change')
    }

    return (
        <div>
            <div className="w-[80%] flex gap-2 mx-auto mt-4">
                <input onChange={inputChange} className="flex-1  border-2 h-[50px] border-slate-500 rounded-lg p-2" type="text" placeholder="Enter a task..." />
                <button onClick={ addTodo} className="h-[50px] w-[130px] text-white bg-green-500 rounded-lg hover:bg-green-600">Add Task</button>
            </div>
            <div className="mt-4 w-[80%] mx-auto p-2">
                <ul>
                    <li className="bg-slate-300 h-[60px] p-4 text-slate-700 rounded-lg">tea time</li>
                </ul>
            </div>
        </div>
    )
}
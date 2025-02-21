


export function Button(props){

    console.log(props)

    return (
        <button className={`${props.style} h-[50px] w-[140px] bg-pink-600 text-white rounded-lg hover:bg-pink-300 duration-300`}>
            {props.text}
        </button>
    )
}



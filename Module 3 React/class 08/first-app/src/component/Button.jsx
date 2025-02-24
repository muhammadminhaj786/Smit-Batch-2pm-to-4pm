

// export const Button = (props)=> {
export const Button = ({heading, style})=> {


    // console.log(props.heading)

    // const {heading} = props

    return (
        <button className={`${style} mt-4 w-[120px] h-[40px] rounded-[8px] bg-blue-400 text-white hover:bg-blue-600`}>
            {
                // props.heading
                heading
            }
            
        </button>
    )
}
import { Button } from "./Button";


export function Header(){

    

    function button(name){
        console.log(name)
    }

    return (
        <div>
            Header
            <Button text={'login'}  />
            {button('minhaj')}
        </div>
    )
}
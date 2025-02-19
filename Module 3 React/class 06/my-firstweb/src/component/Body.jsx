import { LoadButton } from "./MyButton";
import MyCard from "./MyCard";
import BasicSpeedDial from "./MySpeeddial";

export function Body(){
    return (
        <div style={{marginTop: '24px'}}>
            <MyCard />
            {/* <BasicSpeedDial /> */}
            <LoadButton />
            <h1 className="text-red-800">
                Hello
            </h1>
        </div>
    )
}
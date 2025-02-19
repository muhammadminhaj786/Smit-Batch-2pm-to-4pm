import { Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

export function LoadButton(){
    return (
        <Button sx={{border: "2px solid black"}} loading loadingPosition="start" startIcon={<SaveIcon />}>
            Save
        </Button>
    )
}
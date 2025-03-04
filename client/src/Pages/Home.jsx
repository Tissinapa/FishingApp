import Hbimg from "../Components/Hbimg"
import { useNavigate } from "react-router-dom";
import  {Button} from "@mui/material"

export function Home() {
    const handleClick = useNavigate()

  return (
    <Hbimg>
        <div>
          <Button
           
          variant="containded"
          color="primary"
          size="large"
          onClick={() => handleClick("/dashboard")}
          >
            Kalaan
          </Button>
        </div>
    </Hbimg>

  )
}


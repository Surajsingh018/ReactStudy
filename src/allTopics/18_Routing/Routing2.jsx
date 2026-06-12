import {RouterProvider} from "react-router-dom"
import { myRouter } from "./Router"


const Routing2 = () => {
  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

export default Routing2

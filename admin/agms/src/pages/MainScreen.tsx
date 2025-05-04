import { useState } from "react"
import Dashboard from "./Dashboard"
import Athentication from "./authenticate/Athentication"

const MainScreen = (): JSX.Element => {
    const [authenticate,setAuthenticate] = useState(true)

  return (
    <main>
        {authenticate?(
            <Dashboard/>
        ):(
            <Athentication/>
        )}
    </main>
  )
}

export default MainScreen
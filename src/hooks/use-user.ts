import { useContext } from "react"
import { AuthUserContext } from "../components/Session"

export const useUser = () => {
    const user = useContext(AuthUserContext)
    return user
}

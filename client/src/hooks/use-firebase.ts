import FirebaseContext from "../components/Firebase/context"
import { useContext } from "react"

const useFirebase = () => {
    const firebase = useContext(FirebaseContext)
    return firebase;
}

export default useFirebase;
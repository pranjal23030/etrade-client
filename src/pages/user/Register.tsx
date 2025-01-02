import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setAge, setName } from "../../store/userSlice"


function Register() {

    // insertion and update garne, POST, PUT/Patch, INSERT, update, --> useDispatch() + types
    // select garnu paryo, select * from , .find() -- > useSelector() + types

    const data = useAppSelector((store) => store.user)
    console.log(data)
    const dispatch = useAppDispatch()
    dispatch(setName("Tom Jones"))
    dispatch(setAge(100))

    return (
        <h1>Register page </h1>
    )
}

export default Register
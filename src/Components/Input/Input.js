import { memo } from "react";
import "./Input.css";
const Input =(props)=> {
    return <input {...props}/>
}
export default memo(Input);
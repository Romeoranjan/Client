import {Link} from "react-router-dom";
const AlertMsg = (props)=>{
    return <div className='alertmsg'>
        <h3>{props.msg}</h3>
    </div>
}
export default AlertMsg;
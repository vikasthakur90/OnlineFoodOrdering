//import useOnlineStatus from "../utils/useOnlineStatus";
import UserClass from "./UserClass";

const About = () => {
    // const onlinestatus = useOnlineStatus();
    // console.log(onlinestatus);
    // if(onlinestatus === false){
    //     return(<h1>Opps Check your Connection</h1>);
    // }
    return(
        <div>
            <h1>About Page</h1>
            <UserClass />
        </div>
    )
}
export default About;
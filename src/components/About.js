import User from "./User";
import UserClass from "./UserClass";


const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react web series</h2>
            {/* <User name={"Adithyan (function)"}/> */}
            <UserClass name={"Adithyan (class)"}/>
        </div>
    )
}

export default About
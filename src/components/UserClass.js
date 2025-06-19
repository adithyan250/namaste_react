import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
              name: "Name",
              location: "Location",
              avatar_url: "http://dummy"
            }
        }        
    }
  
    async componentDidMount(){
      const userName = "adithyan250"
      const data = await fetch("https://api.github.com/users/adithyan250");
      const json = await data.json();

      this.setState({
        userInfo:json
      })

    }
  render() {
    console.log(this.state.userInfo)

    const {name, location, avatar_url} = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: adithyanpb2005@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
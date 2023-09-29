import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                id:1,
                login:"Dummy"
            }
        }
    }
   async componentDidMount(){
      const data = await fetch("https://api.github.com/users/vikasthakur90");
      const json = await data.json();
      this.setState({
        userInfo:json
      })  
      console.log(json);
    }
    componentWillUnmount(){
        console.log("Unmounted")
    }
    render(){
        const {login,id,name,location} = this.state.userInfo
       
        console.log("Rendered")
        return(
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url} style={{height:"200px"}}/>
                <h2>{login+"  "}</h2>
                
                <h3>{name+"  "}</h3>
                <h3>{location} </h3>
                
            </div>
        )
    }
}
export default UserClass;
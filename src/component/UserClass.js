import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:1
        }
    }
    componentDidMount(){
        console.log("mounted")
    }
    render(){
        const {name,location} = this.props
        const {count} = this.state
        console.log("Rendered")
        return(
            <div className="user-card">
                <h2>{count}</h2>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <button onClick={()=>{
                    //Never update state variable directly
                    this.setState({
                        count:this.state.count+1
                    })
                }}>change count</button>
            </div>
        )
    }
}
export default UserClass;
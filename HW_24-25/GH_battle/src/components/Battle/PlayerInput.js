import { useState } from "react";


const PlayerInput = (props) => {
    const [userName, setUserName] = useState("")

    const handlerChange = (event) => {
        setUserName(event.target.value)
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(props.id, userName)
    }

    return (
        <form className="column" onSubmit={handelSubmit}>
            <label className="header" htmlFor="username">{props.label}</label>
            <input
                id="username"
                type="text"
                placeholder="GitHub Username"
                autoCapitalize="off"
                value={userName}
                onChange={handlerChange}
            ></input>
            <button
                className="button"
                type="submit"
                disabled={!userName}>
                Submit
            </button>
        </form>
    )
}

//class PlayerInput extends React.Component{

//    constructor(){
//        super()
//        this.state = {
//            userName: ""
//        }
//    }

//    handlerChange = (event) =>{
//        this.setState({userName: event.target.value})
//    }

//handelSubmit = (event) => {
//    event.preventDefault();
//    console.log(this.state);
//}

//    render(){
//        return (
//<form className="column" onSubmit={this.handelSubmit}>
//    <label className="header" htmlFor="username">{this.props.label}</label>
//    <input 
//        id="username"
//        type="text"
//        placeholder="GitHub Username"
//        autoCapitalize="off"
//        value={this.state.userName}
//        onChange={this.handlerChange}
//    ></input>
//    <button 
//    className="button" 
//    type="submit"
//    disabled={!this.state.userName}>
//        Submit
//    </button>
//</form>
//        )
//    }
//}

export default PlayerInput;
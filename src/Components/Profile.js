import React from "react";
import {FETCH_PROFILE_URL} from "../../Config";

class Profile extends React.Component{

    constructor(props){
        super(props)
        this.state={
            profileInfo:{},
        }
    }
    
    async componentDidMount(){
        const result= await fetch(FETCH_PROFILE_URL);
        const data= await result.json();
        // console.log(data)
        this.setState({
            profileInfo: data,
        })
    }

    render(){
        return(
            <div className="m-4 p-2 sm:my-4 flex flex-col sm:flex-row max-sm:min-h-[70vh] items-center sm:justify-center gap-7">
            <img className="rounded-full w-48 h-48 sm:h-96 sm:w-96" src={this.state.profileInfo?.avatar_url} alt="profile picture"/>
            <div className="flex flex-col gap-4 sm:gap-7 sm:w-2/5 sm:justify-center">
            <h1 className="sm:text-5xl text-2xl font-bold sm:font-semibold">{this.state.profileInfo?.name}</h1>
            <div className="flex gap-5 sm:justify-between ">
                <h2 className="sm:text-xl text-md font-semibold">Software Developer</h2>
                <h2 className="sm:text-xl text-md sm:mr-40 font-semibold">{this.state.profileInfo?.location}</h2>
            </div>
            <div className="sm:text-xl text-sm font-normal sm:font-bold sm:mx-6 italic">
            <p>"I am a Software Developer, and I believe creating something new everyday will help you to learn alot.</p>
             <p>I have passion for Software Developement, but on the other side, I also enjoy developing something new."</p>
             </div>
            </div>
            </div>
        )
    }
}

export default Profile;
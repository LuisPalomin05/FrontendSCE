import React,{Component} from "react";

export default class Profile extends Component{
    
    render(){
        const name = "luis"
        return(
            <div className="profile">
                <div>
                    <div>
                    <ion-icon name="person-circle"></ion-icon>
                    </div>
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
                

            </div>

        )
    }
}
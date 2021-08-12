import { Avatar } from '@material-ui/core'
import React , {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '.././assets/styles/components/SidebarChat.css'

const SidebarChat = ({name,id, addNewChat}) => {

    const [seedAvatar, setSeedAvatar] = useState("")
    useEffect(()=>{
        setSeedAvatar(Math.floor(Math.random() * 5000))
        
    },[])

    const createChat = () => {
        const roomName = prompt("Please enter a room name for Chat");
        if (roomName){
            //do some clever stuff... 
        }
        return;
    }



    return !addNewChat ?  (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seedAvatar}.svg`}/>

                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Last message...</p>
                </div>
            </div>
        </Link>
    ): (
        <div onClick={createChat}>
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat

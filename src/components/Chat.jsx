import { Avatar , IconButton } from '@material-ui/core'
import { SearchOutlined , AttachFile , MoreVert, InsertEmoticon, Mic } from '@material-ui/icons'
import React , {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import db from "../firebase"
import '.././assets/styles/components/Chat.css'

const Chat = () => {

    const {roomID} = useParams()
    const [roomName, setRoomName] = useState("")
    useEffect(() => {

        if (roomID){
            db.collection('rooms').doc(roomID).onSnapshot(
                snapshot => {
                    setRoomName(snapshot.data().name)
                }
            )
        }
    }, [roomID])


    const [seedAvatar, setSeedAvatar] = useState("")
    useEffect(()=>{
        setSeedAvatar(Math.floor(Math.random() * 5000))
        
    },[])
    
    
    const [input, setInput] = useState("")

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input)

        setInput('')
    }



    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seedAvatar}.svg`}/>
                
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            
            </div>
            <div className="chat__body">
                {/** TO DO -> === Change the Condition === on className above */}
                <p className={`chat__message ${true && "chat__message--sender"} `}>
                    <span className="chat__name">Franco</span>
                    Hey Guys
                    <span className="chat__timestamp">
                        3:52pm
                    </span>
                </p>

            </div>
            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}  placeholder="Type a message" />
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <Mic/>
            </div>

        </div>
    )
}

export default Chat

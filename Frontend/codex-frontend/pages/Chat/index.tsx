import io from "socket.io-client";
import { useState } from "react";
import Styles from "@/styles/chat.module.css";
// import { Navigate } from "react-router-dom";
const socket = io('https://hackathon-data.onrender.com/');



function Chat() {

    const [temp, setTemp] = useState("");
    const [name, setName] = useState("Anirudha")
    const [msgArea, setMsgArea] = useState([])
    // const [type, setType] = useState("");

    // if (name === undefined) {
    //     let temp = prompt('Please enter your name');
    // }

    const handleText = (e) => {
        if (e.key === "Enter") {
            sendMessage(e.target.value)
        }
    }

    const sendMessage = (msg) => {
        let msg1 = {
            user: name,
            message: msg,
            id: `${socket.id}${Math.random()}`
        }

        // Appending the message in chatarea
        appendMessage(msg1, 'outgoing');
        setTemp("");
        socket.emit('message', {
            text: msg.trim(),
            name: name,
            id: `${socket.id}${Math.random()}`,
            socketID: socket.id,
        });
    }

    const appendMessage = (msg, type) => {
        let obj = { ...msg, type }
        setMsgArea([...msgArea, obj])
    }

    socket.on('message', (data) => {
        // console.log(data)
        let obj = {
            user: data.name,
            message: data.text,
            id: data.id
        }
        appendMessage(obj, "incoming")
    })

    return (
        <div className={Styles.chatcontainer}>
            <section className={Styles.chatsection}>
                <div className={Styles.brand}>
                    <img src="https://www.pngitem.com/pimgs/m/129-1298996_streamlabs-chatbot-logo-hd-png-download.png" alt="Chat logo" />
                    <h1>Wassup</h1>
                </div>
                <div className={Styles.messagearea}>
                    {msgArea.map((item) => {
                        return (
                            <div key={item.id} className={`${Styles[`${item.type}`]} ${Styles["message"]}`}>
                                <h4>{item.user}</h4>
                                <p>{item.message}</p>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <textarea id={Styles.textarea} cols="30" rows="1" placeholder="write a message..." value={temp} onChange={(e) => setTemp(e.target.value)} onKeyUp={(e) => handleText(e)}></textarea>
                </div>
            </section >
        </div>

    )
}

export default Chat;
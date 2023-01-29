import io from "socket.io-client";
import { useState } from "react";
import Styles from "@/styles/chat.module.css";
import Head from "next/head"
import {Box,Image} from "@chakra-ui/react";
import Link from "next/link";
// import { Navigate } from "react-router-dom";
const socket = io('https://hackathon-data.onrender.com/');


const getFromLocalStorage = (key: string) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return localStorage.getItem(key)
  }

const initialState = { user: getFromLocalStorage("userData") ? JSON.parse(getFromLocalStorage("userData") || '{}') : [] };
const name = initialState.user.fullname || "Chat Bot"


function Chat() {

    const [temp, setTemp] = useState("");
    const [msgArea, setMsgArea] = useState([])

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
        <>
        <Head>
        <title>ChatBox</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://i.postimg.cc/jqWWx3m2/learningplate.png" />
      </Head>
      <main>
        <Link href="/">
        <Box height={50} width={60}>
         <Image objectFit={"cover"} src='https://i.postimg.cc/jqWWx3m2/learningplate.png' alt='learningplate' />
         </Box>
        </Link>
     
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

      </main>
        </>
       
    )
}

export default Chat;
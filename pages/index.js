import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import styles from "@/styles/home.module.css";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState('');

  const createAndJoin = () => {
    const newRoomId = uuidv4();
    setRoomId(newRoomId);
    router.push(`/${newRoomId}`);
  };
  
  const joinRoom = () => {
    if(roomId) {
      router.push(`/${roomId}`);
    } else {
      alert('Insira um ID de sala válido!');
    }
  }

  return (
    <div className={styles.homeContainer}>
      <h1>AMBIENTE VIRTUAL PSICOTERÁPICO</h1>
      <div className={styles.enterRoom}>
        <input
          type="text"
          placeholder="Digite o ID da sala"
          value={roomId}
          onChange={(e) => setRoomId(e?.target?.value)}
        />
        <button onClick={joinRoom}>Entrar na sala</button>
      </div>
        <span className={styles.separatorText}>--- ou ---</span>
        <button onClick={createAndJoin}>Criar outra sala</button>
    </div>
  );
}

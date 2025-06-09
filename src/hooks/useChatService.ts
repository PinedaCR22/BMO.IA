import { useState } from "react";
import { Message } from "../types/Message";
import { ChatService } from "../services/ChatServise";

export const useChatService = () => {
  interface ChatEntry {
  _id: string;
  messages: Message[];
}

const [history, setHistory] = useState<ChatEntry[]>([]);

  const [loading, setLoading] = useState(false);

  const fetchHistorial = async () => {
    setLoading(true);
    try {
      const data = await ChatService.fetchHistorial();
      setHistory(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const eliminarHistorial = async (id: string) => {
    try {
      await ChatService.eliminarHistorial(id);
      await fetchHistorial();
    } catch (error) {
      console.error(error);
    }
  };

  const guardarConversacion = async (messages: Message[]) => {
    try {
      await ChatService.guardarConversacion(messages);
      await fetchHistorial();
    } catch (error) {
      console.error(error);
    }
  };

  const enviarMensaje = async (messages: Message[]) => {
    try {
      const res = await ChatService.consultarIA(messages);
      const updatedMessages: Message[] = [...messages, { role: 'assistant', content: res.content }];
      await guardarConversacion(updatedMessages);
      return updatedMessages;
    } catch (error) {
      console.error("Error al consultar la IA:", error);
      return messages;
    }
  };

  return {
    history,
    loading,
    fetchHistorial,
    eliminarHistorial,
    guardarConversacion,
    enviarMensaje,
  };
};

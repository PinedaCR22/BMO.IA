import { Message } from "../types/Message";

const API = import.meta.env.VITE_API_URL;

export const ChatService = {
  async fetchHistorial() {
    const res = await fetch(`${API}/chat/all`);
    if (!res.ok) throw new Error("Error al obtener el historial");
    return await res.json();
  },

  async eliminarHistorial(id: string) {
    const res = await fetch(`${API}/chat/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al eliminar el historial");
    return true;
  },

  async guardarConversacion(messages: Message[]) {
    const res = await fetch(`${API}/chat/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });
    if (!res.ok) throw new Error("Error al guardar la conversación");
    return true;
  },

  async consultarIA(messages: Message[]) {
    const res = await fetch(`${API}/chat/ask`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });
    if (!res.ok) throw new Error("Error al consultar la IA");
    return await res.json();
  },
};

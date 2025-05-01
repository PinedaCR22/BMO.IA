import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import portadaChat from '../Images/PortadaChat.jpg';

type Role = 'user' | 'assistant';

interface Message {
  role: Role;
  content: string;
}

const Chat: React.FC = () => {
  const { isLightMode } = useOutletContext<{ isLightMode: boolean }>();

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = '';

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: newMessages,
        }),
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || 'La IA no respondió.';
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error('Error al comunicarse con la API:', err);
      setMessages([...newMessages, { role: 'assistant', content: 'Error al comunicarse con la IA.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section
      className={`min-h-screen py-10 transition-colors duration-500 flex justify-center px-4 ${
        isLightMode ? 'bg-gray-50 text-black' : 'bg-gray-900 text-white'
      }`}
    >
      <div className={`w-full max-w-3xl rounded-lg shadow-lg overflow-hidden ${
        isLightMode ? 'bg-white' : 'bg-gray-800'
      }`}>
        <div className="w-full">
          <img
            src={portadaChat}
            alt="Portada Chat"
            className="w-full object-cover aspect-[3/1]"
          />
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-1">BMO.IA</h1>
          <p className="text-center text-sm mb-6">Tu asistente virtual</p>

          <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded ${
                  msg.role === 'user'
                    ? `bg-teal-600 text-right text-white`
                    : `bg-gray-200 text-left text-black dark:bg-gray-700 dark:text-white`
                }`}
              >
                <strong>{msg.role === 'user' ? 'Tú' : 'IA'}:</strong> {msg.content}
              </div>
            ))}
            {loading && <p className="text-gray-500 text-sm">IA está escribiendo...</p>}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              className={`flex-1 p-2 rounded border focus:outline-none transition ${
                isLightMode
                  ? 'bg-gray-200 text-black border-gray-300'
                  : 'bg-gray-700 text-white border-gray-600'
              }`}
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSend}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
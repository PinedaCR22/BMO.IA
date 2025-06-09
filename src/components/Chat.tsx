import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import portadaChat from "../Images/PortadaChat.jpg";
import jsPDF from "jspdf";
import { useChatService } from "../hooks/useChatService";

// Importamos los iconos
import { FaHistory, FaPrint, FaTimes, FaTrash } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";

type Role = "user" | "assistant";

interface Message {
  role: Role;
  content: string;
}
// Función para encontrar la mejor coincidencia usando distancia de Levenshtein

const Chat: React.FC = () => {
  const { isLightMode } = useOutletContext<{ isLightMode: boolean }>();

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { history, fetchHistorial, eliminarHistorial, enviarMensaje  } = useChatService();
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const conversationsPerPage = 2;

 const handleSend = async () => {
  if (!input.trim()) return;

  const newMessages: Message[] = [...messages, { role: 'user', content: input }];
  setMessages(newMessages);
  setInput('');
  setLoading(true);

  const updated = await enviarMensaje(newMessages);
  setMessages(updated);
  setLoading(false);
};


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  // Limpiar conversación y guardar historial
  const handleClear = () => {
    if (messages.length > 0) {
      setMessages([]);
    }
  };

  // Ver historial abriendo el modal
  const handleViewHistory = async () => {
    await fetchHistorial();
    setShowHistoryModal(true);
    setCurrentPage(1);
  };

  // Cerrar el modal de historial
  const handleCloseHistoryModal = () => {
    setShowHistoryModal(false);
  };

  // Imprimir conversación actual en PDF con formato mejorado
  const handlePrintPDF = (conversationToPrint: Message[] = messages) => {
    if (conversationToPrint.length === 0) {
      alert("No hay mensajes para imprimir.");
      return;
    }

    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Conversación con BMO", 14, 20);
    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(14, 25, 196, 25);

    let y = 35;
    const lineHeight = 10;
    const pageHeight = doc.internal.pageSize.height;

    conversationToPrint.forEach((msg) => {
      const isUser = msg.role === "user";
      const prefix = isUser ? "Tú: " : "BMO: ";
      const color: [number, number, number] = isUser
        ? [0, 150, 136]
        : [70, 70, 70];

      doc.setTextColor(...color);
      doc.setFont("helvetica", isUser ? "bold" : "normal");

      // Separamos texto largo en líneas que entren en página
      const textLines = doc.splitTextToSize(prefix + msg.content, 180);
      textLines.forEach((line: string | string[]) => {
        if (y > pageHeight - 20) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, 14, y);
        y += lineHeight;
      });

      y += 4; // espacio extra entre mensajes
    });

    doc.save("conversacion_bmo.pdf");
  };

  // Componente Modal para el historial
  const HistoryModal = () => {
    if (!showHistoryModal) return null;

    // Calcular el total de páginas
    const totalPages = Math.ceil(history.length / conversationsPerPage);

    // Obtener las conversaciones para la página actual
    const indexOfLastConversation = currentPage * conversationsPerPage;
    const indexOfFirstConversation =
      indexOfLastConversation - conversationsPerPage;
    const currentConversations = history.slice(
      indexOfFirstConversation,
      indexOfLastConversation
    );

    // Funciones para la navegación de páginas
    const goToNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    const goToPreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const goToPage = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };

    // Función para renderizar los números de página
    const renderPageNumbers = () => {
      const pageNumbers = [];
      const maxVisiblePages = 5; // Número máximo de páginas a mostrar

      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

      // Ajustar startPage si endPage está en el límite
      if (endPage === totalPages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`px-3 py-1 mx-1 rounded ${
              currentPage === i
                ? "bg-teal-600 text-white"
                : isLightMode
                ? "bg-gray-200 hover:bg-gray-300 text-gray-700"
                : "bg-gray-700 hover:bg-gray-600 text-gray-200"
            }`}
          >
            {i}
          </button>
        );
      }
      return pageNumbers;
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
        <div
          className={`w-full max-w-4xl max-h-screen overflow-y-auto rounded-lg shadow-lg p-6 ${
            isLightMode ? "bg-white text-black" : "bg-gray-800 text-white"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Historial de Conversaciones</h2>
            <button
              onClick={handleCloseHistoryModal}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
            >
              <FaTimes size={24} />
            </button>
          </div>

          {history.length === 0 ? (
            <p className="text-center py-10">No hay historial guardado.</p>
          ) : (
            <>
              <div className="space-y-8">
                {currentConversations.map((conversation, localIndex) => {
                  const convIndex = indexOfFirstConversation + localIndex;
                  return (
                    <div
                      key={convIndex}
                      className={`p-4 rounded-lg border ${
                        isLightMode ? "border-gray-200" : "border-gray-700"
                      }`}
                    >
                      <h3 className="font-bold text-lg mb-2">
                        Conversación {convIndex + 1}
                      </h3>
                      <div className="space-y-3 mb-3">
                        {conversation.messages.map(
                          (msg: Message, msgIndex: number) => (
                            <div
                              key={msgIndex}
                              className={`p-3 rounded ${
                                msg.role === "user"
                                  ? `bg-teal-600 text-right text-white`
                                  : `bg-gray-200 text-left text-black dark:bg-gray-700 dark:text-white`
                              }`}
                            >
                              <strong>
                                {msg.role === "user" ? "Tú" : "BMO"}:
                              </strong>{" "}
                              {msg.content}
                            </div>
                          )
                        )}
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={() => eliminarHistorial(conversation._id)}
                          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                          title="Eliminar esta conversación"
                        >
                          <FaTrash size={16} /> Eliminar
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Controles de paginación */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-6 gap-2">
                  <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded ${
                      currentPage === 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
                        : isLightMode
                        ? "bg-gray-200 hover:bg-gray-300 text-gray-700"
                        : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                    }`}
                  >
                    Anterior
                  </button>

                  {renderPageNumbers()}

                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded ${
                      currentPage === totalPages
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500"
                        : isLightMode
                        ? "bg-gray-200 hover:bg-gray-300 text-gray-700"
                        : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                    }`}
                  >
                    Siguiente
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      className={`min-h-screen py-10 transition-colors duration-500 flex justify-center px-4 ${
        isLightMode ? "bg-gray-50 text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* Barra lateral derecha para los botones/iconos */}
      <div
        className={`fixed right-4 top-1/4 flex flex-col gap-4 p-2 rounded-lg shadow-lg ${
          isLightMode ? "bg-white" : "bg-gray-800"
        }`}
      >
        <button
          onClick={handleClear}
          className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
            isLightMode ? "text-red-600" : "text-red-400"
          }`}
          title="Limpiar conversación"
        >
          <MdOutlineCleaningServices size={20} />
        </button>
        <button
          onClick={handleViewHistory}
          className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
            isLightMode ? "text-yellow-600" : "text-yellow-400"
          }`}
          title="Ver historial"
        >
          <FaHistory size={20} />
        </button>
        <button
          onClick={() => handlePrintPDF()}
          className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition ${
            isLightMode ? "text-blue-600" : "text-blue-400"
          }`}
          title="Imprimir conversación actual"
        >
          <FaPrint size={20} />
        </button>
      </div>

      <div
        className={`w-full max-w-3xl rounded-lg shadow-lg overflow-hidden ${
          isLightMode ? "bg-white" : "bg-gray-800"
        } flex flex-col`}
      >
        <div className="w-full">
          <img
            src={portadaChat}
            alt="Portada Chat"
            className="w-full object-cover aspect-[3/1]"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h1 className="text-3xl font-bold text-center mb-1">
            ¡Hola soy BMO!
          </h1>
          <p className="text-center text-sm mb-6">
            Tu asistente virtual de soporte técnico especializado en computadoras.
          </p>

          <div className="space-y-3 mb-6 max-h-96 overflow-y-auto flex-grow">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded ${
                  msg.role === "user"
                    ? `bg-teal-600 text-right text-white`
                    : `bg-gray-200 text-left text-black dark:bg-gray-700 dark:text-white`
                }`}
              >
                <strong>{msg.role === "user" ? "Tú" : "BMO"}:</strong>{" "}
                {msg.content}
              </div>
            ))}
            {loading && (
              <p className="text-gray-500 text-sm">BMO está escribiendo...</p>
            )}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              className={`flex-1 p-2 rounded border focus:outline-none transition ${
                isLightMode
                  ? "bg-gray-200 text-black border-gray-300"
                  : "bg-gray-700 text-white border-gray-600"
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

      {/* Modal para mostrar el historial */}
      <HistoryModal />
    </section>
  );
};

export default Chat;

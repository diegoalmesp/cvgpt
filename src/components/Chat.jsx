import { useState, useRef, useEffect } from 'react';
import { BiChat, BiWindowClose } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import Markdown from 'react-markdown';
import useTailwindBreakpoint from './hooks/useTailwindBreakpoint';

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const navigate = useNavigate();
  const { breakpoint, isIPad } = useTailwindBreakpoint();

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (data.reply) {
        const botMessage = { sender: 'bot', text: data.reply };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: 'Error getting response.' },
        ]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Error connecting to server.' },
      ]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <>
      {isOpen && (
        <div className="chat-window fixed bottom-0 right-0 m-2 w-[90%] max-w-[1024px] h-96 bg-black-100 shadow-lg rounded-lg p-4 z-10 border-gray-200 border-2">
          <div className="chat-header mb-2 flex items-start justify-between">
            <span
              className="w-4 h-4 bg-red-600 rounded-lg cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
            <h2 className="text-white text-right">Ask to my CV (w/ChatGPT)</h2>
          </div>

          <div className="chat-messages overflow-auto h-60 bg-black rounded p-2 text-white">
            {messages.map((msg, idx) => (
              <div key={idx} className="mb-2">
                {msg.sender === 'user' && (
                  <>
                    <span className="text-green-600 mr-2 font-bold">
                      &#8594;
                    </span>
                    <span className="text-cyan-600 mr-2 font-bold">~</span>
                  </>
                )}
                <span className="text-sm font-mono">
                  {msg.sender === 'user' ? (
                    msg.text
                  ) : (
                    <Markdown>{msg.text}</Markdown>
                  )}
                </span>
              </div>
            ))}
            {loading && (
              <p className="text-sm italic text-gray-400">Thinking...</p>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input absolute bottom-0 left-0 p-4 w-full flex items-center justify-center">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Type your message..."
              className="bg-tertiary p-2 w-3/4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
            <button onClick={sendMessage} className="w-1/4" disabled={loading}>
              {loading ? (
                <span className="text-gray-400">Sending...</span>
              ) : (
                <span className="text-white">Send</span>
              )}
            </button>
          </div>
        </div>
      )}

      <button
        className={`joyride-chat fixed ${
          isOpen && 'hidden'
        } bottom-4 right-3 scale-125 bg-violet-600 text-white p-2 rounded-full shadow-lg z-20 hover:bg-violet-700 transition-colors duration-300 `}
        aria-label="Toggle chat window"
        data-tooltip-id="chat-tooltip"
        data-tooltip-html="Chat with my CV here!"
        data-tooltip-place="left"
        onClick={() => {
          if (breakpoint !== 'sm' && breakpoint !== 'md' && !isIPad) {
            navigate('/chat');
            return;
          }
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <BiWindowClose /> : <BiChat />}
      </button>
      <Tooltip id="chat-tooltip" openOnClick={false} className="z-20" />
    </>
  );
};

export default ChatWindow;

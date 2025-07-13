import { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';

const AUTO_STARTING_MESSAGES = [
  {
    sender: 'bot',
    text: 'Here you can ask questions about my CV.',
  },
  {
    sender: 'bot',
    text: 'You can also ask about my projects, skills, or anything else you want to know.',
  },
  {
    sender: 'bot',
    text: 'This is a free model from DeepSeek: NOT THE BEST, but it does the job. Ask in any language you want 🌍',
  },
  {
    sender: 'bot',
    text: 'Feel free to start the conversation by typing your message below &#8628;',
  },
];

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [autoStartingMessages, setAutoStartingMessages] = useState(
    AUTO_STARTING_MESSAGES,
  );
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const textArea = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    textArea.current.focus();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messages.length === 0 && autoStartingMessages.length > 0) {
        const nextMessage = autoStartingMessages.shift();
        setAutoStartingMessages(autoStartingMessages);
        setMessages((prev) => [...prev, nextMessage]);
      } else {
        clearInterval(timer);
      }
    }, 2000);
  }, [messages, autoStartingMessages]);

  const sendMessage = async (message) => {
    if (!message.trim()) return;
    if (loading) return;
    const userMessage = { sender: 'user', text: message };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
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
        { sender: 'bot', text: 'Error connecting to server.', error: true },
      ]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen bg-black opacity-80 bg-computer-pattern">
      <div className="absolute left-0 right-0 m-auto hidden lg:flex items-center justify-center h-full lg:w-[1366px]">
        <div className="lg:block absolute bg-green-950 h-[500px] left-0 right-0 m-auto top-[8%] w-[620px] z-[-1]" />
      </div>
      <div className="hidden lg:flex items-center justify-center m-auto h-full lg:w-[1366px] lg:bg-single-computer bg-no-repeat bg-cover [background-position:50%_50%]">
        <div className="absolute top-[1%] lg:top-36 w-[95%] lg:w-[500px] overflow-auto h-80 flex flex-col justify-end rounded py-2 text-green-400 bg-opacity-50">
          {messages.map((msg, idx) => (
            <div key={idx} className="mb-2 animate-[pulse_0.5s]">
              {msg.sender === 'user' && (
                <>
                  <span className="text-green-500 mr-2 font-bold">&#8594;</span>
                </>
              )}
              <span className="text-sm font-mono">
                {msg.sender === 'user' ? (
                  msg.text
                ) : (
                  <span className={`${msg.error && 'text-red-500'}`}>
                    <Markdown
                      components={{
                        p: ({ ...props }) => (
                          <span {...props} className="font-mono" />
                        ),
                      }}
                    >
                      {msg.text}
                    </Markdown>
                  </span>
                )}
              </span>
            </div>
          ))}
          {loading && (
            <p className="text-sm font-mono italic text-green-700">
              Thinking...
            </p>
          )}
          <div ref={bottomRef} />
        </div>
        <div className="w-[500px] flex text-sm font-mono text-left text-green-100 relative top-2">
          <span className="absolute text-green-500 font-bold font-mono animate-pulse shadow-lg">
            &gt;
          </span>
          <textarea
            value={input}
            ref={textArea}
            id="input"
            name="input"
            onChange={(e) => setInput(e.target.value)}
            className="w-full pl-3 text-green-500 rounded relative bg-inherit outline-none block resize-none caret-green-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage(e.target.value);
                setInput('');
              }
            }}
          />
        </div>
      </div>
      <div className="absolute flex flex-col h-1/3 items-center justify-around bottom-0 left-0 w-full text-center text-gray-400 p-2 bg-black bg-opacity-50 opacity-5 hover:opacity-100 text-sm font-mono">
        For a more immersive experience, please enable sound.
        <span className="block lg:hidden text-green-800">
          This page is only visible in desktop. Swipe left or click back to
          return to the main page.
        </span>
        <audio
          src="/361330__spoonsandlessspoons__computer-running-ambient-36-scnds.wav"
          autoPlay
          controls
          loop
        ></audio>
      </div>
    </div>
  );
};

export default Chat;

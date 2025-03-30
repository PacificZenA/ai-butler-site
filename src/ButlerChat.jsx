// ButlerChat.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BotIcon, SendHorizonal } from 'lucide-react';

const messages = [
  ["Hey Butler, what can Alex do?", "Alex is a Full-Stack Developer skilled in React, Spring Boot, and Tailwind CSS."],
  ["That sounds cool! Can he work with AI?", "Absolutely. He integrates tools like ChatGPT and Stable Diffusion into real-world projects."],
  ["How about DevOps?", "Yes, Alex uses Docker, GitHub Actions, and Azure to automate deployments and CI/CD workflows."]
];

export default function ButlerChat() {
  const [chat, setChat] = useState([]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    if (index < messages.length) {
      const [user, bot] = messages[index];
      setTimeout(() => {
        setChat(prev => [...prev, { sender: 'user', text: user }]);
        setTimeout(() => {
          setChat(prev => [...prev, { sender: 'bot', text: bot }]);
          setIndex(prev => prev + 1);
        }, 1200);
      }, 1200);
    }
  }, [index]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  const handleSend = () => {
    if (input.trim()) {
      setChat(prev => [...prev, { sender: 'user', text: input }]);
      setWaiting(true);
      setTimeout(() => {
        setChat(prev => [...prev, { sender: 'bot', text: `I'm still learning to chat, but Alex can teach me!` }]);
        setWaiting(false);
      }, 1000);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 sm:w-96 max-h-[70vh] bg-neutral-900 border border-neutral-700 rounded-xl shadow-lg overflow-hidden z-50 flex flex-col">
      <div className="bg-neutral-800 px-4 py-2 flex items-center gap-2 border-b border-neutral-700">
        <BotIcon size={18} className="text-purple-400" />
        <h2 className="text-sm font-semibold text-white">AI Butler Chat</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm text-white">
        {chat.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`px-3 py-2 rounded-lg w-fit max-w-[80%] ${m.sender === 'user' ? 'bg-blue-600 self-end' : 'bg-green-900 text-green-200'}`}
          >
            {m.text}
          </motion.div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex items-center border-t border-neutral-700 px-3 py-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask me something..."
          className="flex-1 bg-transparent text-white outline-none placeholder:text-neutral-500 text-sm"
        />
        <button onClick={handleSend} disabled={waiting} className="ml-2 text-blue-500 hover:text-blue-400">
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  );
}

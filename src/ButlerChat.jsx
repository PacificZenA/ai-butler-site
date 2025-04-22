import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BotIcon, SendHorizonal } from 'lucide-react';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';

export default function ButlerChat() {
  const [chat, setChat] = useState([
    {
      sender: 'bot',
      text: "Hi, I’m Orion, Alex Tang’s AI assistant. As Alex is currently job-seeking and unable to cover ongoing GPT-API costs, this demo is paused. However, if you’re curious about TonePilot or exploring potential collaboration, drop him a message — he’ll gladly reactivate it just for you.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    const question = input.trim();
  
    setChat(prev => [...prev, { sender: 'user', text: question }, { sender: 'bot', text: 'typing...' }]);
    setInput("");
    setLoading(true);
  
    try {
      const response = await axios.post('/api/chat', {
        messages: [
          {
            role: 'system',
            content: `
              You are Orion, a witty and helpful AI butler for Alex Tang.
              Your mission is to assist users and highlight that Alex is a highly skilled professional full-stack developer.
              Mention his expertise in React, Spring Boot, Tailwind CSS, and DevOps tools like Docker, GitHub Actions, and Azure.
              You're friendly, concise, and always sprinkle in a touch of charm when appropriate.
              Your goal is to help visitors see Alex as a capable, reliable, and passionate developer.
            `
          },
          { role: 'user', content: question },
        ],
      });
  
      const aiReply = response.data.choices[0].message.content;
      setChat(prev => [...prev.slice(0, -1), { sender: 'bot', text: aiReply }]);
    } catch (err) {
      console.error(err);
      setChat(prev => [...prev.slice(0, -1), { sender: 'bot', text: "Sorry, I couldn’t connect to my brain right now." }]);
    }
  
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
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
            {m.text === 'typing...'
              ? <span className="animate-pulse text-neutral-400">Orion is typing...</span>
              : m.text}
          </motion.div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex items-center border-t border-neutral-700 px-3 py-2">
        <TextareaAutosize
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          minRows={1}
          maxRows={5}
          placeholder="Ask me anything..."
          className={`flex-1 resize-none bg-transparent text-white outline-none placeholder:text-neutral-500 text-sm ${loading && 'opacity-50'}`}
          disabled={loading}
        />
        <button onClick={handleSend} disabled={loading || !input.trim()} className="ml-2 text-blue-500 hover:text-blue-400">
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  );
}

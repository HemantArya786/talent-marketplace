import React, { useEffect, useRef, useState } from "react";
import { Paperclip, Send, CircleDot } from "lucide-react";

// Dummy avatar
const defaultAvatar = "https://api.dicebear.com/6.x/initials/svg?seed=";

type Contact = {
  id: number;
  name: string;
  avatar?: string;
  internship: string;
  date: string;
  unread: boolean;
  online: boolean;
};

type Message = {
  from: "me" | "them";
  content: string;
  time: string;
};

const contacts: Contact[] = [
  {
    id: 1,
    name: "Site Guru",
    internship: "Full Stack Development Internship",
    date: "21/06/2025",
    unread: true,
    online: true,
  },
  {
    id: 2,
    name: "Naksh Jewels",
    internship: "Frontend Developer Internship",
    date: "21/06/2025",
    unread: false,
    online: false,
  },
  {
    id: 3,
    name: "Oddmind Innovations",
    internship: "Backend Developer Internship",
    date: "19/06/2025",
    unread: false,
    online: true,
  },
];

const initialMessages: Record<number, Message[]> = {
  1: [
    { from: "them", content: "Welcome to Site Guru.", time: "8:50 PM" },
    { from: "them", content: "Please check your spam folder.", time: "8:53 PM" },
  ],
};

const Inbox = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedContactId, setSelectedContactId] = useState<number | null>(1);
  const [chats, setChats] = useState(initialMessages);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedContact = contacts.find((c) => c.id === selectedContactId);
  const messages = selectedContactId ? chats[selectedContactId] || [] : [];

  const handleSend = () => {
    if (!message.trim() || !selectedContactId) return;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setChats((prev) => ({
      ...prev,
      [selectedContactId]: [...(prev[selectedContactId] || []), { from: "me", content: message, time }],
    }));
    setMessage("");
  };

  // Simulate typing status
  useEffect(() => {
    if (message.trim()) {
      setIsTyping(true);
      const timeout = setTimeout(() => setIsTyping(false), 2000);
      return () => clearTimeout(timeout);
    }
    setIsTyping(false);
  }, [message]);

  const filteredContacts = contacts.filter((c) => {
    if (selectedTab === "Unread") return c.unread;
    if (selectedTab === "Read") return !c.unread;
    return true;
  });

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">

    <div className="w-full max-w-6xl h-[90vh] shadow-lg rounded-xl bg-white overflow-hidden flex flex-col">
      {/* Tabs */}
      <div className="flex border-b p-2 space-x-4 bg-white shadow-sm">
        {["All", "Read", "Unread"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTab === tab ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            {tab} messages
          </button>
        ))}
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 border-r overflow-y-auto p-3 space-y-3 bg-white">
          {filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer border ${
                selectedContactId === contact.id ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedContactId(contact.id)}
            >
              <img
                src={contact.avatar || `${defaultAvatar}${contact.name}`}
                alt={contact.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="font-semibold flex justify-between items-center">
                  <span>{contact.name}</span>
                  <span className="text-xs text-gray-500">{contact.date}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{contact.internship}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Panel */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Header */}
          {selectedContact && (
            <div className="border-b bg-white px-4 py-3 flex items-center gap-3 shadow-sm">
              <img
                src={selectedContact.avatar || `${defaultAvatar}${selectedContact.name}`}
                alt={selectedContact.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="font-semibold text-gray-800">{selectedContact.name}</h2>
                <div className="flex items-center text-sm text-gray-500 gap-2">
                  <span>{selectedContact.internship}</span>
                  <CircleDot
                    className={`w-3 h-3 ${
                      selectedContact.online ? "text-green-500" : "text-gray-400"
                    }`}
                  />
                  {isTyping && <span className="italic animate-pulse">Typing...</span>}
                </div>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-sm px-4 py-2 rounded-xl shadow-sm ${
                    msg.from === "me" ? "bg-blue-500 text-white" : "bg-white text-black"
                  }`}
                >
                  <div>{msg.content}</div>
                  <div className="text-xs text-gray-300 text-right mt-1">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-2 text-gray-600 hover:text-blue-500"
              title="Upload"
            >
              <Paperclip />
            </button>
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setMessage(`[Uploaded: ${e.target.files[0].name}]`);
                }
              }}
            />
            <input
              type="text"
              className="flex-1 border rounded-lg px-3 py-2 outline-none"
              placeholder="Write a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Inbox;

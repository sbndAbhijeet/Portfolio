import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export const ResumeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hi! I am Abhijeet's resume bot. Ask me anything about his experience, projects, skills, achievements, or education!",
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'WETEC Internship',
    'Technical Projects',
    'Skills & Languages',
    'Education & CPI',
    'Achievements',
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Process local model response
    setTimeout(() => {
      const botResponse: Message = {
        sender: 'bot',
        text: getBotResponse(textToSend),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 400);
  };

  const getBotResponse = (query: string): string => {
    const cleanQuery = query.toLowerCase().trim();

    // Welcome intents
    if (cleanQuery.match(/\b(hi|hello|hey|greetings|hola)\b/)) {
      return "Hello! I can help you explore Abhijeet's background. Ask me about his 'internship at WETEC', 'projects like Lumin', 'technical skills', or 'academic credentials'!";
    }

    // Internship / Experience intents
    if (
      cleanQuery.includes('intern') ||
      cleanQuery.includes('wetec') ||
      cleanQuery.includes('experience') ||
      cleanQuery.includes('work') ||
      cleanQuery.includes('job')
    ) {
      return `Abhijeet is currently a **Software Engineering Intern** at **WETEC Systems GmbH** (Remote, Germany) since May 2026.
      
Key responsibilities include:
• Working with self-hosted **Matrix (Synapse)** infrastructure and decentralized messaging systems.
• Configuring **Docker-based** Matrix services with **Element client** integration.
• Exploring AI-assisted workflows and **Model Context Protocol (MCP)** integration for chat systems.`;
    }

    // Projects intents
    if (cleanQuery.includes('lumin') || cleanQuery.includes('chat assistant')) {
      return `**Lumin – AI Chat Assistant** (React, FastAPI, MongoDB, LangChain, LangGraph):
• Developed an AI-powered chat application featuring persistent conversations, external tool support, and PDF/notes-based retrieval.
• Built a typed FastAPI backend with MongoDB and a responsive React user interface.
• Implemented workflow-based routing for tool invocation and designed a Blog-Note system to organize AI responses.`;
    }

    if (cleanQuery.includes('webquery') || cleanQuery.includes('browser assistant') || cleanQuery.includes('extension')) {
      return `**WebQuery – RAG Web Assistant** (FastAPI, Qdrant, LangChain, JavaScript):
• Developed a Manifest v3 browser extension for natural language queries over documentation and web content.
• Implemented a Retrieval-Augmented Generation (RAG) pipeline using FastAPI, embeddings, and Qdrant vector search.
• Retrieved relevant content chunks and generated contextual answers with source references.`;
    }

    if (cleanQuery.includes('course') || cleanQuery.includes('registration') || cleanQuery.includes('django')) {
      return `**Course Registration System – IIIT Vadodara** (Django, Python, SQLite, Bootstrap):
• Built a web-based course registration platform mirroring student and faculty academic registration workflows.
• Implemented authorization, semester/branch-based course filtering, registration tracking, and email alerts.`;
    }

    if (cleanQuery.includes('pdfquery') || cleanQuery.includes('streamlit')) {
      return `**PDFQuery – Ask Questions** (Streamlit, FastAPI, Qdrant, Docker):
• Developed a web interface that lets users upload PDFs, index them into Qdrant, and query them using a RAG pipeline.
• Containerized Qdrant via Docker, separated UI and API services, and added simple configuration to swap between LLM providers.`;
    }

    if (cleanQuery.includes('project') || cleanQuery.includes('build') || cleanQuery.includes('code')) {
      return `Abhijeet has built several major projects:
1. **Lumin – AI Chat Assistant**: A full-stack chat orchestration platform using LangGraph, FastAPI, and React.
2. **WebQuery – RAG Assistant**: A Manifest v3 Chrome extension for document Q&A backed by a Qdrant vector search API.
3. **PDFQuery**: A Streamlit/FastAPI application for PDF indexing and querying.
4. **Course Registration System**: A role-based portals system for IIIT Vadodara built on Django.

Which one would you like to hear more about?`;
    }

    // Skills intents
    if (
      cleanQuery.includes('skill') ||
      cleanQuery.includes('language') ||
      cleanQuery.includes('framework') ||
      cleanQuery.includes('database') ||
      cleanQuery.includes('tool') ||
      cleanQuery.includes('python') ||
      cleanQuery.includes('java') ||
      cleanQuery.includes('javascript') ||
      cleanQuery.includes('dsa')
    ) {
      return `Abhijeet's Technical Skills:
• **Languages:** Python, Java, JavaScript, SQL.
• **Frameworks & Libraries:** FastAPI, React.js, LangChain, LangGraph, Django, Bootstrap.
• **Databases & Vector Stores:** MySQL, MongoDB, SQLite, Qdrant.
• **Tools & Technologies:** Git, GitHub, Docker.
• **Core Concepts:** Data Structures & Algorithms, OOP, Database Management Systems, Operating Systems, Computer Networks.`;
    }

    // Achievements intents
    if (
      cleanQuery.includes('achieve') ||
      cleanQuery.includes('trophy') ||
      cleanQuery.includes('hackwithinfy') ||
      cleanQuery.includes('infosys') ||
      cleanQuery.includes('leetcode') ||
      cleanQuery.includes('rating') ||
      cleanQuery.includes('google cloud') ||
      cleanQuery.includes('arcade')
    ) {
      return `Abhijeet's Achievements:
• Selected for **Infosys HackWithInfy 2026** as **Specialist Programmer L1** (Trainee) through a national-level coding competition and hiring program.
• Participated in the **Google Cloud Skills Boost: Arcade Facilitator Program (2025)**.
• Solved **400+ problems on LeetCode** and achieved a highest contest rating of **1563**.`;
    }

    // Education intents
    if (
      cleanQuery.includes('educat') ||
      cleanQuery.includes('study') ||
      cleanQuery.includes('college') ||
      cleanQuery.includes('school') ||
      cleanQuery.includes('iiit') ||
      cleanQuery.includes('vadodara') ||
      cleanQuery.includes('cpi') ||
      cleanQuery.includes('gpa') ||
      cleanQuery.includes('grade') ||
      cleanQuery.includes('marks')
    ) {
      return `Abhijeet's Academic Background:
1. **Indian Institute of Information Technology Vadodara** (Aug 2023 – May 2027)
   • B.Tech in Computer Science and Engineering
   • **CPI: 8.39**
2. **Sri Gayatri Junior College, Hyderabad** (Jun 2020 – May 2022)
   • Class XII (TSBIE) – **Percentage: 97.8%**
3. **Hindu Public School, Hyderabad** (Mar 2019 – Mar 2020)
   • Class X (CBSE) – **Percentage: 89%**`;
    }

    // Contact/Socials intents
    if (
      cleanQuery.includes('contact') ||
      cleanQuery.includes('email') ||
      cleanQuery.includes('linkedin') ||
      cleanQuery.includes('connect') ||
      cleanQuery.includes('youtube') ||
      cleanQuery.includes('blog') ||
      cleanQuery.includes('hashnode') ||
      cleanQuery.includes('peerlist') ||
      cleanQuery.includes('social')
    ) {
      return `You can connect with Abhijeet through these platforms:
• ✉️ **Email:** sbndabhijeet@gmail.com
• 💼 **LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/sapparapu-abhijeet-1b0a11282/)
• ✍️ **Blog (Hashnode):** [Hashnode Blog](https://hashnode.com/@Bhanu546)
• 💼 **Peerlist:** [Peerlist Profile](https://peerlist.io/bhanu_546)
• 🎥 **YouTube:** [YouTube Channel](https://www.youtube.com/@sbndBhanu546)
• 💻 **GitHub:** [GitHub Profile](https://github.com/sbndAbhijeet)`;
    }

    // Resume file intents
    if (cleanQuery.includes('resume') || cleanQuery.includes('cv') || cleanQuery.includes('download')) {
      return `You can view or download Abhijeet's complete resume PDF here: 
👉 [Abhijeet's Resume (Google Drive)](https://drive.google.com/file/d/1W0WOGxeGFMCFcFQ8hwB9hfqwYsHoNbQZ/view)`;
    }

    // Fallback response - STRICT restriction to resume only
    return "I am a local helper bot trained *strictly* on Abhijeet's resume, so I don't know about other topics. Feel free to ask about his WETEC internship, programming languages, LeetCode profile, or projects like Lumin!";
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        className="chat-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Resume Chatbot"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--gradient-text)',
          border: 'none',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
          transition: 'all 0.3s ease',
          zIndex: 999,
        }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          className="chat-window-panel card"
          style={{
            position: 'fixed',
            bottom: '96px',
            right: '24px',
            width: '380px',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            padding: '0',
            zIndex: 999,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1.25rem',
              background: 'var(--bg-tertiary)',
              borderBottom: '1px solid var(--card-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bot size={20} style={{ color: 'var(--primary)' }} />
              <h4 style={{ margin: 0, fontSize: '1rem' }}>Resume Bot</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages List */}
          <div
            style={{
              flexGrow: 1,
              padding: '1.25rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  background:
                    msg.sender === 'user'
                      ? 'var(--primary)'
                      : 'var(--bg-secondary)',
                  color: msg.sender === 'user' ? '#ffffff' : 'var(--text-primary)',
                  padding: '0.75rem 1rem',
                  borderRadius:
                    msg.sender === 'user'
                      ? '16px 16px 4px 16px'
                      : '16px 16px 16px 4px',
                  fontSize: '0.9rem',
                  border:
                    msg.sender === 'user'
                      ? 'none'
                      : '1px solid var(--card-border)',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {/* Parse basic markdown bolding/links in bot response */}
                {msg.sender === 'bot' ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: msg.text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--secondary); text-decoration:underline;">$1</a>')
                        .replace(/\n/g, '<br/>'),
                    }}
                  />
                ) : (
                  msg.text
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Chips */}
          <div
            style={{
              padding: '0.5rem 1rem',
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              flexWrap: 'nowrap',
              borderTop: '1px solid var(--card-border)',
              backgroundColor: 'rgba(0,0,0,0.05)',
              scrollbarWidth: 'none',
            }}
          >
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.borderColor = 'var(--primary)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            style={{
              padding: '0.75rem 1rem',
              borderTop: '1px solid var(--card-border)',
              display: 'flex',
              gap: '0.5rem',
              background: 'var(--bg-tertiary)',
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me a question..."
              style={{
                flexGrow: 1,
                border: '1px solid var(--input-border)',
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                fontSize: '0.9rem',
                background: 'var(--input-bg)',
                color: 'var(--text-primary)',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--primary)',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

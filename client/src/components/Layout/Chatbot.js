// Chatbot.js
import React, { useState } from 'react';
import '../../styles/Chatbot.css'; // Create this CSS file for styling

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const toggleChatbox = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async () => {
        if (inputValue.trim() === "") return;

        const userMessage = { name: "User", message: inputValue };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        try {
            const response = await fetch('/api/chat', { // Adjust your endpoint as needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: inputValue }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const botMessage = { name: "Sam", message: data.answer }; // Adjust based on your API response
            setMessages((prevMessages) => [...prevMessages, botMessage]);
            setInputValue('');
        } catch (error) {
            console.error('Error:', error);
            setInputValue('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chatbot-container">
            <div className={`chatbox ${isOpen ? 'chatbox--active' : ''}`}>
                <div className="chatbox__support">
                    <div className="chatbox__header">
                        <h4 className="chatbox__heading">Chat support</h4>
                        <p className="chatbox__description">Welcome! 🌟 I'm your shopping buddy. What can I help you find today?</p>
                    </div>
                    <div className="chatbox__messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`messages__item messages__item--${msg.name === "Sam" ? 'visitor' : 'operator'}`}>
                                {msg.message}
                            </div>
                        ))}
                    </div>
                    <div className="chatbox__footer">
                        <input
                            type="text"
                            placeholder="Write a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button className="chatbox__send--footer send__button" onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            </div>
            <button className="chatbox__button" onClick={toggleChatbox}>
                <img src="./images/chatbox-icon.svg" alt="Chatbox Icon" style={{ height: "50px", width: "130px" }}/>
            </button>
        </div>
    );
};

export default Chatbot;

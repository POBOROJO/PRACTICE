import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TypewriterChat() {
  const [messages, setMessages] = useState([]);

  const fetchMessage = async () => {
    try {
      const response = await axios.get('http://localhost:8000/message');
      const message = response.data.message;
      setMessages([{ role: 'Bot', content: message }]);
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  const typeWriter = (element, message, index = 0) => {
    if (element) {
      if (index < message.length) {
        element.innerHTML += message.charAt(index);
        index++;
        setTimeout(() => typeWriter(element, message, index), 50); // Adjust the typing speed as needed
      }
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []); // Fetch a message when the component mounts

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>
          <p ref={(el) => typeWriter(el, `${message.role}: ${message.content}`)} />
        </div>
      ))}
      <button onClick={fetchMessage}>Get New Message</button>
    </div>
  );
}

export default TypewriterChat;

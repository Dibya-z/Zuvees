import React, { useState } from 'react';

function SendButton() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    setMessage('Your product has been added');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleSend}
        className="flex gap-5 self-center px-12 py-5 w-64 max-w-full text-2xl font-semibold text-center text-white bg-stone-400 rounded-[32px] hover:bg-stone-500 transition-colors max-md:px-5"
      >
        <span className="grow shrink w-[111px]">Send Now</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed7667b78d24db4e1920e034c3983af6158265ec5a1a31d527e61c6f2ed6e210?placeholderIfAbsent=true&apiKey=cb64faffcdb840d3a1f57cae13bb04be" className="object-contain shrink-0 self-start w-6 aspect-square" alt="Send icon" />
      </button>
      {message && (
        <div className="mt-4 text-center text-green-600">{message}</div>
      )}
    </div>
  );
}

export default SendButton;
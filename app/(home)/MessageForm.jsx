'use client';

import { useState } from 'react';

export default function AuthForm({ handleSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form
      className='flex flex-col sm:w-1/2'
      onSubmit={(e) => handleSubmit(e, email, password)}
    >
      <label>
        <input
          placeholder='text'
          type='name'
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </label>
      <label>
        <input
          placeholder='Email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <textarea
          className='h-56'
          placeholder='Type your message here'
          type='text'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />
      </label>
      <button className='btn-primary'>Submit</button>
    </form>
  );
}

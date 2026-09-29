// This login page creates a visual form with an Email input, a Password input, and two buttons (one to sign in, and one to sign up)

//This tells the framework that this page runs on the user's browser (client-side) rather than on the cloud server. 
// Tells Next.js to send JavaScript to the user's browser since the cloud can't handle user interactions.
// The browser is what listens to keystrokes, tracks, the email state, and handles te click events. 
'use client' 

import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr' // The modern way! A helper client.

export default function LoginPage() {
  const [email, setEmail] = useState('') // email is a variable(holds current text data), but setEmail is a special function(setter function, job is to change the data and instantly shout to React: "Hey data change!Redraw so user sees the new letters they jst typed.").  
  const [password, setPassword] = useState('') // Together they are called State and they trigger a visual update on the screen.
  const [message, setMessage] = useState('') //Something a regular js variable can never do.
  
  // Initialize the browser client using your .env.local variables
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // ! is a non null assertion operator. Tells your code editor, trust me, i promise this string evironment variable is NOT empty.
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // This handles standard email verification loops
        emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : '',
      },
    })
    if (error) setMessage(`Error: ${error.message}`)
    else setMessage('Check your email for the confirmation link!')
  }

  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) setMessage(`Error: ${error.message}`)
    else setMessage('Logged in successfully!')
  }

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Habit Tracker Login</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} // event listener triggers setEmail on every single keystroke.  Text is held live in reach memory(state).
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSignIn} style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sign In
        </button>
        <button onClick={handleSignUp} style={{ padding: '10px', backgroundColor: '#000', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sign Up
        </button>
      </div>
      {message && <p style={{ marginTop: '20px', color: message.startsWith('Error') ? 'red' : 'green' }}>{message}</p>}
    </div>
  )
}

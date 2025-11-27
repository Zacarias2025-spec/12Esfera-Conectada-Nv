import React, {useState} from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const nav = useNavigate()

  async function handleLogin(e){
    e.preventDefault()
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if(error) setMsg(error.message)
    else {
      setMsg('Entrou com sucesso')
      nav('/')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4">Entrar</h2>
      <form onSubmit={handleLogin} className="space-y-3">
        <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 border rounded" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full p-2 bg-blue-600 text-white rounded">Entrar</button>
      </form>
      <p className="text-red-600 mt-2">{msg}</p>
    </div>
  )
}

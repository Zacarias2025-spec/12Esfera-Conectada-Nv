import React, {useState} from 'react'
import { supabase } from '../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [username, setUsername] = useState('')
  const [msg, setMsg] = useState('')
  const nav = useNavigate()

  async function handleRegister(e){
    e.preventDefault()
    if(!username.match(/^\w+$/)) { setMsg('Nome de usuário só pode ter letras, números e _'); return }
    const { data, error } = await supabase.auth.signUp({
      email, password,
    }, { data: { display_name: displayName, username }})
    if(error) setMsg(error.message)
    else {
      setMsg('Verifique o e-mail para confirmar sua conta.')
      nav('/login')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4">Cadastrar</h2>
      <form onSubmit={handleRegister} className="space-y-3">
        <input className="w-full p-2 border rounded" placeholder="Nome de exibição" value={displayName} onChange={e=>setDisplayName(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Nome de usuário (sem @)" value={username} onChange={e=>setUsername(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="w-full p-2 border rounded" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full p-2 bg-green-600 text-white rounded">Cadastrar</button>
      </form>
      <p className="text-red-600 mt-2">{msg}</p>
    </div>
  )
}

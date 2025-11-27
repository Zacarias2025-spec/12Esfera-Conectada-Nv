import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProfilePage(){
  const { username } = useParams()
  // Placeholder profile view. In a real app we fetch profile + posts from Supabase.
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <div className="flex gap-4 items-center">
        <div className="w-24 h-24 bg-slate-200 rounded-full"></div>
        <div>
          <h2 className="text-xl font-bold">Nome de Exibição</h2>
          <div className="text-sm text-gray-500">@{username}</div>
          <p className="mt-2 text-sm text-gray-700">Bio: Sou um criador na Esfera Conectada.</p>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded">Mensagem</button>
            <button className="px-3 py-1 bg-gray-200 rounded">Bloquear</button>
            <button className="px-3 py-1 bg-yellow-400 rounded">Assinar 🔔</button>
          </div>
        </div>
      </div>

      <section className="mt-6">
        <h3 className="font-semibold mb-3">Publicações</h3>
        <div className="space-y-3">
          <div className="p-3 bg-slate-50 rounded">Aqui ficam as publicações apenas do autor do perfil.</div>
        </div>
      </section>
    </div>
  )
}

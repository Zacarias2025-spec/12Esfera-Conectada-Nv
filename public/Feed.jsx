import React from 'react'
import Post from './Post'

// Placeholder feed that lists example posts
export default function Feed(){
  const posts = [
    { id:1, author: {display:'João', username:'joao'}, content: 'Olá Esfera Conectada!' },
    { id:2, author: {display:'Ana', username:'ana'}, content: 'Primeiro post com imagem e vídeo' },
  ]
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold">Criar post</h3>
        <p className="text-sm text-gray-500">Texto, imagem, vídeo (YouTube/TikTok embed), áudio até 3MB.</p>
      </div>
      {posts.map(p=> <Post key={p.id} post={p} />)}
    </div>
  )
}

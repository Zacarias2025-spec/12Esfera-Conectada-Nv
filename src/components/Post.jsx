import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({post}){
  return (
    <article className="bg-white p-4 rounded shadow">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
        <div>
          <Link to={'/profile/'+post.author.username} className="font-semibold">{post.author.display}</Link>
          <div className="text-sm text-gray-500">@{post.author.username}</div>
        </div>
      </div>
      <div className="mt-3">
        <p>{post.content}</p>
      </div>
      <div className="mt-3 flex gap-4 text-sm text-gray-600">
        <button>Curtir</button>
        <button>Comentar</button>
        <button>Partilhar</button>
      </div>
    </article>
  )
}

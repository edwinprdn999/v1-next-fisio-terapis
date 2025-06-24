'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div>
      <h1>Daftar Post</h1> 
      
      
    </div>
  )
}
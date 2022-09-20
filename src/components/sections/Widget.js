import React, { useEffect, useRef } from 'react'

export default function Widget({checkTopOffset}) {
  const widgetRef = useRef()

  useEffect(()=> {
    checkTopOffset(widgetRef, "stats")
  },[])
  
  return (
    <section ref={widgetRef} id="widget">
    <h1>Widget</h1>
    </section>
  )
}


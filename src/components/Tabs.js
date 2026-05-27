import React from 'react'
import { useState } from 'react'

const Tabs = ({tabs}) => {
  const [content,setContent]=useState("")
  return (
    <div>
      <ul>
      {
        tabs.map(tab=><li><a onClick={()=>setContent(tab.content)}>{tab.title}</a></li>)
      }
      </ul>
      {content && <p>{content}</p>}
    </div>
  )
}

export default Tabs

import React, { useState } from 'react'

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}>
            <button onClick={() => setActiveTab(index)}>
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <p>{tabs[activeTab].content}</p>
    </div>
  )
}

export default Tabs
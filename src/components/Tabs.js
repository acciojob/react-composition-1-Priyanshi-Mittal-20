import React, { useState } from 'react'

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}>
            <a href="#" onClick={() => setActiveTab(index)}>
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <p>{tabs[activeTab].content}</p>
    </div>
  )
}

export default Tabs
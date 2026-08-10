import React from 'react'
import { useState,useMemo } from 'react'

const Filteringlist = () => {
     const [search, setSearch] = useState("")
    const items = ["apple", "banana", "orange", "mango"]

    const filteredItems = useMemo(() => {
        const lowerSearch = search.toLowerCase()
        return items.filter((item) => item.toLowerCase().includes(lowerSearch))
    }, [search, items])
  return (
    <div>
       <input
                placeholder='Search Fruits'
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
    </div>
  )
}

export default Filteringlist

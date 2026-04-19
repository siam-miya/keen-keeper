
import React, { useEffect, useState } from 'react'

const useFrinedsHook = () => {
     const [friends, setFrineds] = useState([])
      const [loading, setLoading] = useState(true)
      useEffect(() => {
        const fetchData = async () => {
          const res = await fetch("/friends.json")
          const data = await res.json()
        //   console.log(data)
          setFrineds(data)
          setLoading(false)
        }
        fetchData()
      }, [])
  return {friends, loading}
}

export default useFrinedsHook

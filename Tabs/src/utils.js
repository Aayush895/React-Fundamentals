import { useState, useEffect } from 'react'

// Below is a custom hook for fetching data from the specified URL
export function useDatafetcher(url) {
  const [data, setData] = useState(null)

  async function fetchData() {
    const fetchData = await fetch(url)
    const urlData = await fetchData.json()

    setData(urlData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return data
}

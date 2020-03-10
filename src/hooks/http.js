import { useState, useEffect } from 'react'

export const useHttp = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(true)
    const [fetchedData, setFetchedData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            // setIsLoading(true)
            try {
                const req = await fetch(url)
                //     , {
                //     headers: { "Content-Type": "application/json" } // need?
                // })
                const res = await req.json()
                setIsLoading(false)
                setFetchedData(res)
            } catch (e) {
                console.log(e)
                setIsLoading(false)
                // setFetchedData('error')
            }
        }
        fetchData()
        // setTimeout(fetchData, 5000);

    }, dependencies)
    return [isLoading, fetchedData]
}

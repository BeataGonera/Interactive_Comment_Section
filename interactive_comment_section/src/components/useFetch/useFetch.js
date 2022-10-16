import { useEffect, useState } from 'react'

export const useFetch = function(url){

    const [comments, setComments] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((response) => {
            if(!response.ok){
                throw Error('could not fetch')
            }
            return response.json()
        })
        .then((comments) => {
            setComments(comments)
            console.log(comments)
            setError(null)
        })
        .catch((err => {
            setError(err.message)
        }))
        }, [])

     return {comments, error}
}

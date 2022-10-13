import { useState } from "react"
import { CommentTextContainerStyled } from "./CommentTextContainer.style"

export const CommentTextContainer = () => {

    const [commentText, setCommentText] = useState(null)

    const fetchCommentsText = function (){
        return fetch('http://localhost:8000/comments')
        .then((response) => response.json())
        .then((comments) => {
            console.log(comments)
            setCommentText(comments[0].content)
        })
    }

    fetchCommentsText();


    return (
    <CommentTextContainerStyled>{commentText}</CommentTextContainerStyled>
    )
}
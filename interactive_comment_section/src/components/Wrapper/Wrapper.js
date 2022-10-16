import { CommentsList } from '../CommentsList/CommentsList'
import { useFetch } from "../useFetch/useFetch"


export const Wrapper = () => {

    const {comments, error} = useFetch('http://localhost:8000/comments')

    return(
        <div className="wrapper">
           {comments && <CommentsList comments={comments}></CommentsList>}
        </div>
    )

}
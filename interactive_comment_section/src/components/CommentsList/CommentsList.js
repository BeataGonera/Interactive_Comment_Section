import { Counter } from "../Counter/Counter"

export const CommentsList = ({comments}) => {

    console.log(comments)

    return(
        <div>
            {comments.map((comment)=>(
               <div className="comment-box" key={comment.id}>

                    <div className="counter-container">
                        <Counter />
                    </div>

                    <div className='comment-name-content-container'>

                        <div className="name-container">
                            {/* <img src={comment.user.image.png}></img> */}
                            {/* // wstawić zdjęcia do pliku */}
                            {comment.user.username}
                            <span>{comment.createdAt}</span>
                        </div>

                        <div className="comment-text-container">{comment.content}</div>
                    </div>

                </div>
              
                ))
            }
        </div>
            )
        }
    

    

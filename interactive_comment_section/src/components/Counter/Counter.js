import { PlusButton } from '../PlusButton/PlusButton.style'
import { MinusButton } from '../MinusButton/MinusButton.style'
import { NumberOfLikes } from '../NumberOfLikes/NumberOfLikes.style';
import { useState } from 'react';

export const Counter = () => {

    const [likes, setLikes] = useState(12);

    const addLike = () => {
        setLikes(likes + 1)
    }

    const removeLike = () => {
        setLikes(likes - 1)
    }

    return (
    <div className='counter-style'>
        <PlusButton onClick={ addLike }>+</PlusButton>
        <NumberOfLikes>{likes}</NumberOfLikes>
        <MinusButton onClick={ removeLike }>-</MinusButton>
    </div>
    )
}
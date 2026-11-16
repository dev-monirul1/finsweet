import React, { useEffect, useState } from 'react'
import Container from '../../common/Container'
import axios from 'axios';

const AboutIndex = () => {

    const [count, setCount] = useState(0)
    const url = 'https://jsonplaceholder.typicode.com/posts'

    // useEffect(()=>{
    //     console.log('hello')
    // },[count])

    const fatchData = async() => {
        try {
            const response = await axios.get(url);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='py-20'>
            <Container>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <h1 className='text-4xl'>{count}</h1>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </Container>
        </div>
    )
}

export default AboutIndex
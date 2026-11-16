import React, { useEffect, useState } from 'react'
import Container from '../../common/Container'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AboutIndex = () => {

    const [count, setCount] = useState(0)
    const [formData, setFormData] = useState({
        productName: "",
        details: "",
        price: ""
    })


    const [product, setProduct] = useState([])
    const url = 'https://dummyjson.com/products'
    const addProductUrl = "https://dummyjson.com/products/add"

    useEffect(() => {
        const fatchData = async () => {
            try {
                const response = await axios.get(url);
                setTimeout(() => {
                    setProduct(response.data.products);
                }, 2000)

            } catch (error) {
                console.error(error);
            }
        }
        fatchData()
    }, [count])

    const handleForm = async () => {
        // console.log(formData)
        const response = await axios.post(addProductUrl, {
            title: formData.productName,
            description: formData.details,
            price: formData.price,
        });
        console.log(response);
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }
    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

    }

    console.log(product)

    return (
        <div className='py-20'>
            <Container>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <h1 className='text-4xl'>{count}</h1>
                <button onClick={() => setCount(count - 1)}>Decrement</button>

                <div className="flex flex-col gap-4 items-start pt-20">
                    <h2 className='text-5xl font-bold'>Create Product</h2>
                    <input onChange={handleFormChange} type="text" name='productName' placeholder='Product Name' className='border' />
                    <input onChange={handleFormChange} type="text" name='details' placeholder='Product Details' className='border' />
                    <input onChange={handleFormChange} type="text" name='price' placeholder='Product Price' className='border' />
                    <button className='bg-primary px-8 py-4 ' onClick={handleForm}>Submit</button>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-10">
                    {product.length > 0 ? product.map((item, index) => {

                        // const id = item.id * 10


                        return (
                            <div key={index} className="bg-primary p-10">
                                {item.images && <img src={item.images || ""} alt="" />}
                                <span className='text-4xl font-bold'>{item.price}</span>
                                <h3 className='text-xl font-bold pt-4'>{item.title || <Skeleton count={1} />}</h3>
                                <p className='pt-5'>{item.description || <Skeleton count={5} />}</p>
                                <p className='pt-5'>Brand: {item.brand || <Skeleton count={5} />}</p>
                            </div>
                        )

                    })
                        :
                        (
                            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                <div key={item} className="bg-primary p-10">
                                    <span className='text-4xl font-bold'><Skeleton count={1} /></span>
                                    <h3 className='text-xl font-bold pt-4'><Skeleton count={1} /></h3>
                                    <p className='pt-5'><Skeleton count={1} /></p>
                                </div>
                            ))

                        )

                    }

                </div>
            </Container>
        </div>
    )
}

export default AboutIndex
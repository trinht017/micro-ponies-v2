import NavBar from '../components/NavBar'
import houseImg from '../images/p-1.png'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

const Listing = () => {
    const [val, setVal] = useState({})
    let { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:3001/postings/${id}`)
            .then((res) => {
                setVal(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });


    return (
        <div class="w-full h-full bg-blue-200">
            <NavBar />
            <div class="flex mt-6">
                <div class="bg-white shadow-md content-center m-auto shadow-slate-400 rounded-lg flex flex-row max-h-screen">
                    <div class="w-2/3 overflow-auto scroll-smooth">
                        <img className='w-full rounded-t-lg' src={houseImg} alt='' />
                        <img className='w-full rounded-t-lg' src={houseImg} alt='' />
                        <img className='w-full rounded-t-lg' src={houseImg} alt='' />
                    </div>
                    <div class="p-2 flex flex-col">
                        <div class="text-lg">
                            {val.price ? <p class="font-bold p-2">${(val.price).toLocaleString()}/month</p> : null}
                            <p class="underline">{val.title}</p>
                            <p>Listing made by: {val.author}</p>
                            <p>{val.address} </p>
                            <div class="flex flex-row gap-3">
                                <p>{val.bed} Bed</p>
                                <p>|</p>
                                <p>{val.bath} Bath</p>
                            </div>  
                            <p>{val.description} </p>
                        </div>

                        <div class="flex content-center mx-auto mt-6 gap-6">
                            <button class="bg-blue-500 p-3 rounded-md">
                                Message
                            </button>
                            <button class="bg-red-500 p-3 rounded-md">
                                Request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing
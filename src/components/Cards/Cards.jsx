
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
// ..
AOS.init();
const Cards = () => {
    const [cards,setCards]=useState([])

    useEffect(()=>{
        fetch("/data.json")
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    return (
        <div>

               <div data-aos="zoom-in" className="text-center space-y-3">
                <h1 className="text-black font-bold text-4xl">Welcome to Urban Dwellz, </h1>
                <p className="text-base text font-bold">
                your trusted partner in finding your dream property. With years of expertise and a deep understanding of the local market, we specialize in matching you with the perfect home or investment opportunity. Whether you are searching for a cozy family house, a luxurious villa, or a prime commercial space, we have a diverse portfolio to cater to your needs.
                </p>
            </div>

            <div className='grid gap-10 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-10'>

                {
                    cards.map((card,index)=><Card key={index} card={card}></Card>)
                }



            </div>
            
        </div>
    );
};

export default Cards;
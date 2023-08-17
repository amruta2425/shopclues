import React from 'react';
import{HiArrowRight ,HiArrowLeft} from 'react-icons/hi';
import {useState}  from 'react';




const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [

        "https://www.dior.com/couture/var/dior/storage/images/horizon/fashion/news/video-dioriviera-video/dioriviera-visuel-fix/40620326-3-fre-FR/dioriviera-visuel-fix.jpg",
        "https://bestrated.co.nz/wp-content/uploads/2021/04/Dotti-1024x450.jpg",
        "https://img.freepik.com/free-photo/dark-haired-woman-with-red-lipstick-smiles-leans-stand-with-clothes-holds-package-pink-background_197531-17609.jpg",
        "https://i0.wp.com/blog.ebunoluwole.com/wp-content/uploads/2022/06/Opening-A-Fashion-Boutique-What-You-Need-To-Know.png?fit=2240%2C1260&ssl=1"
        
        ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3:(prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0:(prev) => prev + 1);
    }; 
    console.log(currentSlide);

 

  return (
    <div className= "w-full h-auto overflow-x-hidden">

        <div className ="w-screen h-[650px] relative">

            <div style={{transform:`translate(-${currentSlide * 100}vw)`}}className ="w-[400vw] h-full flex transition-transform duration-1000">   

                <img className=" w-screen h-full object-cover" src={data[0]} alt="ImgOne" loading="priority"/>
                <img className=" w-screen h-full object-cover" src={data[1]} alt="ImgTwo"/>
        
                <img className=" w-screen h-full object-cover" src={data[2]} alt="ImgThree"/>
                <img className=" w-screen h-full object-cover" src={data[3]} alt="ImgFour"/>
        
            </div>

            <div className = "absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
                <div onClick={prevSlide} className = "w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                    <HiArrowLeft/>

                </div>
                <div onClick={nextSlide} className = "w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                    <HiArrowRight/>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Banner
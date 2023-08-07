const Hero = () => {
    return (
        <>
            <div className='max-w-[1640px] mx-auto p-4'>
                <div className='max-h-[500px] relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Foods</span> Delivered</h1>
                    </div>
                    <img className='w-full max-h-[500px] object-cover' src="https://www.willflyforfood.net/wp-content/uploads/2021/09/ethiopian-food-kitfo.jpg" alt="/" />
                </div>
            </div>

            <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
                {/* Card */}
                <div className='rounded-xl relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                        <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                        <p className='px-2'>Through 8/26</p>
                        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                    </div>
                    <img
                        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                        src='https://seeafricatoday.com/wp-content/uploads/2022/07/Meat-1024x815.jpg'
                        alt='/'
                    />
                </div>
                {/* Card */}
                <div className='rounded-xl relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                        <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                        <p className='px-2'>Added Daily</p>
                        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                    </div>
                    <img
                        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                        src='https://seeafricatoday.com/wp-content/uploads/2022/07/ethiopian-food-yetsom-beyaynetu.webp'
                        alt='/'
                    />
                </div>
                {/* Card */}
                <div className='rounded-xl relative'>
                    {/* Overlay */}
                    <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                        <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
                        <p className='px-2'>Tasty Treats</p>
                        <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                    </div>
                    <img
                        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                        src='https://media.cnn.com/api/v1/images/stellar/prod/190205205048-kitfo.jpg?q=x_200,y_0,h_900,w_1200,c_crop'
                        alt='/'
                    />
                </div>
            </div>
        </>)
}

export default Hero
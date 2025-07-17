import bannerImg from '../components/1.jpg';
import Img from '../components/elephanty.jpg'
import Header from '../components/Header';

export default function Home() {
    return (
        <>
            <Header />

            {/* -- HOME SECTION --- */}
            <section
                className="relative w-full min-h-screen p-[100px] flex items-center justify-between transition-all duration-500 bg-cover bg-center z-10"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                }}
            >

                <div className="absolute inset-0 bg-black/50 z-0" />


                <div className="relative z-10 max-w-4xl text-white">
                    <h2 className="text-[5em] font-extrabold leading-[1em] uppercase">Hiazoo Safari's</h2>
                    <h3 className="text-[4em] font-bold leading-[1em] uppercase">Explore New Discoveries</h3>
                    <p className="text-[1.1em] my-5 font-normal max-w-[700px] text-justify">
                        Discover Africa’s untamed beauty with Hiazoo Safaris — where every journey is a story, and every moment leaves you breathless.
                        Embark on a journey with our Safaris, where every trail leads to wonder and every moment sparks discovery.
                        From the sun-drenched savannahs of the Shimba Hills to the hidden oases, we craft immersive experiences that go beyond sightseeing.
                    </p>
                    <a
                        href="#"
                        className="inline-block text-[1em] bg-red-500 hover:bg-red-600 px-[30px] py-[10px] uppercase font-medium mt-[10px] text-white tracking-[2px] transition-all duration-200"
                    >
                        Explore
                    </a>
                </div>
            </section>

            {/* -- EXPLORE EXPERIENCES --- */}
            <section className="py-20 px-40 bg-gray-200">
                <h3 className="justify-center items-center flex mb-20 font-bold text-[3em]">WHAT WE OFFER</h3>

                <div className="px-40 grid gap-10">
                    <div className="flex justify-between gap-5 bg-white rounded-xl shadow-lg shadow-black/50 h-[300px]">
                        <div className="w-[40%] py-5 px-5">
                            <img src="gamedrive1.jpg" alt="" className="rounded-xl w-full h-full object-cover" />
                        </div>
                        <div className="w-[60%] py-5 px-5 flex flex-col justify-between">
                            <h1 className='font-semibold py-5 text-xl mb-4'>GAME DRIVES</h1>
                            <p className="text-gray-800 text-justify">
                                Experience the thrill of the wild on our expertly guided game drives.
                                Traverse vast landscapes in search of Africa's iconic wildlife, from majestic lions and towering elephants to elusive leopards.
                                Whether at sunrise or sunset, every moment on the trail promises breathtaking encounters and unforgettable memories.
                            </p>
                            <a href="#"
                                className="self-start px-[30px] py-[10px] uppercase font-medium text-white tracking-[2px] transition-all duration-200 text-[1em] bg-red-500 hover:bg-red-600 mt-5"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-between gap-5 bg-white rounded-xl shadow-lg shadow-black/50 h-[300px]">
                        <div className="w-[60%] py-5 px-5 flex flex-col justify-between">
                            <h1 className='font-semibold py-5 text-xl mb-4'>SKY DIVING</h1>
                            <p className="text-gray-800 text-justify">
                                Take adventure to new heights with our exciting skydiving trips.
                                Fly high above the land and feel the rush as you jump and fall through the air.
                                This thrilling activity gives you amazing views and a feeling of total freedom.
                            </p>
                            <a href=""
                                className="self-start px-[30px] py-[10px] uppercase font-medium text-white tracking-[2px] transition-all duration-200 text-[1em] bg-red-500 hover:bg-red-600 mt-5"
                            >
                                Learn More
                            </a>
                        </div>
                        <div className="w-[40%] py-5 px-5">
                            <img src="sky1.jpg" alt="" className="rounded-xl w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="flex justify-between gap-5 bg-white rounded-xl shadow-lg shadow-black/50 h-[300px]">
                        <div className='w-[40%] py-5 px-5'>
                            <img src="bornfire1.jpg" alt="" className="rounded-xl w-full h-full object-cover" />
                        </div>
                        <div className="w-[60%] py-5 px-5 flex flex-col justify-between">
                            <h1 className="font-semibold py-5 text-xl mb-4">BONFIRE CAMPS</h1>
                            <p className="text-gray-800 text-justify">
                                Relax under the stars at our cozy bonfire camps.
                                Sit by the fire, tell stories, enjoy hot drinks, and try local foods.
                                In the quiet of nature, these evenings are perfect for sharing moments with others and feeling at peace.
                            </p>
                            <a href=""
                                className="self-start px-[30px] py-[10px] uppercase font-medium text-white tracking-[2px] transition-all duration-200 text-[1em] bg-red-500 hover:bg-red-600 mt-5"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-between gap-5 bg-white rounded-xl shadow-lg shadow-black/50 h-[300px]">
                        <div className=" w-[60%] py-5 px-5 flex flex-col justify-between">
                            <h1 className="font-semibold py-5 text-xl mb-4">PARK WALK</h1>
                            <p className="text-gray-800 text-justify">
                                Depending on where the nature walks will be conducted, it is possible to see plenty of wildlife not to mention a rich diversity of Birds, flora and fauna.
                                Walks are done by experienced and trained guides and these guides often happen to be local Maasai who have the advantage of being born and bred in the very region that you are exploring.
                            </p>
                            <a
                                href=""
                                className="self-start px-[30px] py-[10px] uppercase font-medium text-white tracking-[2px] transition-all duration-200 text-[1em] bg-red-500 hover:bg-red-600 mt-5"
                            >
                                Learn More
                            </a>
                        </div>
                        <div className='w-[40%] py-5 px-5'>
                            <img src="parkwalk2.jpg" alt="" className="rounded-xl w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* -- ACCOMMODATIONS --- */}
            <section className="bg-teal-200">

                
                <h1>ACCOMODATIONS</h1>
            </section>
            {/* -- EVENTS --- */}
        </>
    );
}

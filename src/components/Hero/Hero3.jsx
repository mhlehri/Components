import CP from '@/ui/CP';
import Image from 'next/image';

const Hero3 = () => {
    const code = `
    <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
    <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
      <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">Take your business to the next level.</h1>
        <p className="lg:text-lg sm:text-base text-sm text-gray-600">
          Track and improve the growth of your business. Send the right customers your way with this tool
        </p>
        <div className="flex space-x-4">
          <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary-gradient/90 h-10 px-4 py-2 bg-blue-600 text-white">
            Get Started
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary-gradient/90 h-10 px-4 py-2 bg-transparent text-blue-600">
            Learn More
          </button>
        </div>
        <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
      </div>
      <div className="relative">  
        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"  className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-b-full object-cover" alt="hero navigate ui"/>
      </div>
    </div>
  </section>       
    `;

    return (
        <CP code={code}>
            <section className="flex min-h-[700px] w-full items-center justify-center bg-white px-8">
                <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row">
                    <div className="max-w-md space-y-4 sm:space-y-5 md:space-y-6">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Take your business to the next level.</h1>
                        <p className="text-sm text-gray-600 sm:text-base lg:text-lg">Track and improve the growth of your business. Send the right customers your way with this tool</p>
                        <div className="flex space-x-4">
                            <button className="ring-offset-background focus-visible:ring-ring hover:bg-primary-gradient/90 inline-flex h-10 flex-nowrap items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                                Get Started
                            </button>
                            <button className="ring-offset-background focus-visible:ring-ring hover:bg-primary-gradient/90 inline-flex h-10 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                                Learn More
                            </button>
                        </div>
                        <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
                    </div>
                    <div className="relative">
                        <Image
                            width={500}
                            height={300}
                            className="relative h-[300px] w-[500px] rounded-b-full bg-gray-400 object-cover sm:h-[500px] md:h-[600px]"
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                            alt="hero navigate ui"
                        />
                    </div>
                </div>
            </section>
        </CP>
    );
};

export default Hero3;

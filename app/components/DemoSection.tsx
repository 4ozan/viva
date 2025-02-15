import type React from "react"
import Image from "next/image"

const DemoSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get to know Viva</h2>
            <p className="text-xl mb-8">
              Viva helps startups deliver high-speed AI solutions while skyrocketing growth. Experience the power of our
              platform firsthand.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#schedule-demo"
                className="inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-md hover:bg-green-100 transition duration-300"
              >
                Schedule a Demo
              </a>
              <a
                href="#watch-video"
                className="inline-block px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-green-500 transition duration-300"
              >
                Watch Video
              </a>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-96">
            <Image
              src="/demo-placeholder.jpg"
              alt="Viva Demo"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <svg className="w-20 h-20 text-white opacity-75" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection


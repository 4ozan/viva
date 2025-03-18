import type React from "react"
import Image from "next/image"
import Picture from '../../public/ceo.jpg'

const Ceo: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-800 py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-8 relative">
            <Image
              src={Picture}
              alt="Frank Tetteh"
              width={120}
              height={120}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <blockquote className="text-2xl sm:text-3xl font-light italic text-center mb-6 relative">
            <svg
              className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-green-500 opacity-50"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            At Viva, we ensure you startup quality growth services with great impact returns.
            <svg
              className="absolute bottom-0 right-0 transform translate-x-6 translate-y-8 h-16 w-16 text-green-500 opacity-50"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M22.648 28C27.544 24.544 31 18.88 31 12.64c0-5.088-3.072-8.064-6.624-8.064-3.36 0-5.856 2.688-5.856 5.856 0 3.168 2.208 5.472 5.088 5.472.576 0 1.344-.096 1.536-.192-.48 3.264-3.552 7.104-6.624 9.024L22.648 28zm-16.512 0c4.8-3.456 8.256-9.12 8.256-15.36 0-5.088-3.072-8.064-6.624-8.064-3.264 0-5.856 2.688-5.856 5.856 0 3.168 2.304 5.472 5.184 5.472.576 0 1.248-.096 1.44-.192-.48 3.264-3.456 7.104-6.528 9.024L6.136 28z" />
            </svg>
          </blockquote>
          <div className="text-center">
            <p className="font-bold text-xl mb-1">Frank Tetteh</p>
            <p className="text-green-300">Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ceo


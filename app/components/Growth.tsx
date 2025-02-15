
import type React from "react"

const GrowthSection: React.FC = () => (
  <section className="bg-gradient-to-r from-green-400 to-green-600 py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
        Beyond growth as you know it
      </h2>
      <p className="text-xl sm:text-2xl text-green-100 mb-8">Behind every good idea is a really great idea.</p>
      <div className="mt-8 flex justify-center space-x-4">
        <a
          href="#get-started"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>
)

export default GrowthSection


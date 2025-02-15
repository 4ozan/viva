import type React from "react"
import { Rocket, Zap, Puzzle, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Fast Launch",
    description: "Get your startup off the ground quickly with our streamlined tools.",
  },
  {
    icon: Zap,
    title: "Powerful Analytics",
    description: "Make data-driven decisions with our advanced analytics platform.",
  },
  {
    icon: Puzzle,
    title: "Seamless Integration",
    description: "Easily integrate with your existing tools and workflows.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Our solutions grow with your startup, from seed to series A and beyond.",
  },
]

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="bg-green-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300">
    <Icon className="h-12 w-12 text-green-300 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-green-100">{description}</p>
  </div>
)

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-green-800 to-green-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Made for your Startup&apos;s Growth</h2>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            The most important technologies that define startups and drive their success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#learn-more"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-900 bg-green-100 hover:bg-green-200 transition duration-300"
          >
            Learn More About Our Features
          </a>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection


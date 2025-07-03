import React from 'react';
import { Header } from '../components/Header';
import Footer from '../components/Footer';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "How to Grow Your Business in 2023",
    excerpt: "Learn the top strategies for scaling your business in the current market landscape.",
    date: "July 15, 2023",
    author: "Jane Smith",
    image: "/blog-image-1.jpg",
    category: "Growth"
  },
  {
    id: 2,
    title: "The Future of Digital Marketing",
    excerpt: "Explore emerging trends and technologies that will shape the future of marketing.",
    date: "June 28, 2023",
    author: "John Davis",
    image: "/blog-image-2.jpg",
    category: "Marketing"
  },
  {
    id: 3,
    title: "Building a Strong Company Culture",
    excerpt: "Discover how to create a positive workplace environment that drives success.",
    date: "June 10, 2023",
    author: "Michael Johnson",
    image: "/blog-image-3.jpg",
    category: "Leadership"
  },
  {
    id: 4,
    title: "Leveraging AI in Modern Business",
    excerpt: "See how artificial intelligence is transforming business operations and customer experiences.",
    date: "May 22, 2023",
    author: "Sarah Williams",
    image: "/blog-image-4.jpg",
    category: "Technology"
  }
];

export default function Blog() {
  return (
   <>
     <Header />
      <main className="relative min-h-screen w-full bg-green-300">
        {/* Background gradients from Hero.tsx */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        
        <div className="container relative z-10 mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Our Blog</h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">Stay up to date with the latest industry news, tips, and insights to help your business thrive.</p>
          </div>
          
          <div className="flex flex-wrap gap-5 mb-12 justify-center">
            <button className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full font-medium hover:bg-white/30 transition-colors duration-300 border border-white/20">All</button>
            <button className="bg-black/20 text-white/80 px-5 py-2 rounded-full font-medium hover:bg-black/30 transition-colors duration-300 border border-white/10">Growth</button>
            <button className="bg-black/20 text-white/80 px-5 py-2 rounded-full font-medium hover:bg-black/30 transition-colors duration-300 border border-white/10">Marketing</button>
            <button className="bg-black/20 text-white/80 px-5 py-2 rounded-full font-medium hover:bg-black/30 transition-colors duration-300 border border-white/10">Technology</button>
            <button className="bg-black/20 text-white/80 px-5 py-2 rounded-full font-medium hover:bg-black/30 transition-colors duration-300 border border-white/10">Leadership</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-white/20 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full border border-white/20">
                    {post.category}
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors duration-300">{post.title}</h2>
                  <p className="text-white/70 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-white/50 mb-4">
                    <span>{post.date}</span>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-black/30 rounded-full mr-2 overflow-hidden">
                        <img src={`/authors/${post.author.replace(/\s/g, '-').toLowerCase()}.jpg`} alt={post.author} className="w-full h-full object-cover" />
                      </div>
                      <span>By {post.author}</span>
                    </div>
                  </div>
                  <a 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center text-white font-medium group-hover:text-white/90 transition-colors duration-300"
                  >
                    Read More 
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <button className="px-8 py-3 bg-black/40 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-black/60 transition-all duration-300 border border-white/20">
              Load More Articles
            </button>
          </div>
        </div>
        
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      </main>
      <Footer />
   </>
  );
}

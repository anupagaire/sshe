// app/blog/page.tsx
"use client";

import Link from "next/link";

export default function BlogPage() {
  const featuredPost = {
    title: "Why Atlas Institute of Education is the Best Choice for Your Future",
    excerpt: "Discover what makes Atlas stand out in delivering transformative business education for the digital age.",
    author: "Professor John Smith",
    authorRole: "Dean, Atlas Institute of Education",
    date: "June 15, 2026",
    readTime: "8 min read",
    category: "Institutional News",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000",
  };

  const otherPosts = [
    {
      title: "Cybersecurity: The Career of the Future",
      excerpt: "Explore why cybersecurity is one of the fastest-growing fields and how Atlas prepares you for it.",
      author: "Dr. Sarah Chen",
      date: "June 10, 2026",
      readTime: "5 min read",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",
      link: "/blog/cybersecurity-future",
    },
    {
      title: "Student Success Story: From Classroom to CEO",
      excerpt: "Meet our alumni who are making waves in the business world after graduating from Atlas.",
      author: "Atlas Team",
      date: "June 5, 2026",
      readTime: "6 min read",
      category: "Student Stories",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800",
      link: "/blog/student-success",
    },
    {
      title: "New Campus Facilities Opening in 2027",
      excerpt: "Exciting upgrades coming to our Petersham campus to enhance your learning experience.",
      author: "Atlas Administration",
      date: "May 28, 2026",
      readTime: "4 min read",
      category: "Campus News",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800",
      link: "/blog/new-facilities",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      {/* Hero Section */}
      <section
        className="relative min-h-[400px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1456513080510-7bf3a84b092a?auto=format&fit=crop&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a97b0]/95 via-[#0a97b0]/90 to-gray-900/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-white text-xs font-bold uppercase tracking-wider mb-6">
            <span>📰</span>
            <span>Atlas Blog</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            News & <span className="text-[#d4af37]">Insights</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay updated with the latest news, industry insights, and stories from Atlas.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#0a97b0] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">Blog</span>
          </div>
        </div>
      </div>

      {/* Featured Blog Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-xs font-bold text-[#0a97b0] uppercase tracking-widest mb-2">
              Featured Article
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Latest from Atlas</h2>
          </div>

          {/* Featured Post Card */}
          <div className="grid lg:grid-cols-2 gap-10 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            <div className="relative h-80 lg:h-auto min-h-[400px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#0a97b0] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  {featuredPost.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  📅 {featuredPost.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  ⏱️ {featuredPost.readTime}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {featuredPost.title}
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0a97b0] to-[#0d8fa3] rounded-full flex items-center justify-center text-white font-bold">
                  PS
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{featuredPost.author}</div>
                  <div className="text-sm text-gray-500">{featuredPost.authorRole}</div>
                </div>
              </div>

              <Link
                href="/blog/why-atlas-is-best"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#0a97b0] text-white font-bold rounded-full hover:bg-[#0d8fa3] hover:shadow-lg transition-all no-underline w-fit"
              >
                Read Full Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-xs font-bold text-[#0a97b0] uppercase tracking-widest mb-2">
              More Articles
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Recent Posts</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link
                key={post.link}
                href={post.link}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0a97b0] text-xs font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>📅 {post.date}</span>
                    <span>•</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0a97b0] transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">By {post.author}</span>
                    <span className="text-xs text-[#0a97b0] font-semibold group-hover:gap-2 transition-all flex items-center gap-1">
                      Read More
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0a97b0] to-[#0d8fa3] rounded-3xl p-10 md:p-14 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay in the Loop
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest news, insights, and updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-[#0a97b0] font-bold rounded-full hover:shadow-xl transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to start your journey at Atlas?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join a community of forward-thinking students and industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0a97b0] text-white font-bold rounded-full hover:shadow-xl transform hover:-translate-y-0.5 transition-all no-underline"
            >
              Apply Now →
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-[#0a97b0] text-[#0a97b0] font-bold rounded-full hover:bg-[#0a97b0]/5 transition-all no-underline"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
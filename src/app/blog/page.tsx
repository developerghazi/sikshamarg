import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Admission Tips & Guides",
  description: "Read expert articles on college admissions, IIM prep, BBA counselling and more from the SikshaMarg team.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern py-20">
        <div className="container-custom text-center text-white">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">Admission Guides & Tips</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Expert articles to help you navigate the college admission process with confidence.
          </p>
          <nav className="flex justify-center gap-2 mt-6 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">

          {/* Featured post */}
          <div className="mb-14">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-widest">Featured Article</span>
            <div className="mt-4 bg-white rounded-2xl shadow-md overflow-hidden grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag size={10} /> {featured.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>
                <h2 className="font-heading font-bold text-2xl text-gray-900 mb-3">{featured.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                  <Link href={`/blog/${featured.slug}`} className="btn-primary py-2 text-sm">
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Other posts */}
          <div>
            <h2 className="font-heading font-semibold text-xl text-gray-900 mb-6">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...rest, ...blogPosts].slice(0, 6).map((post) => (
                <article key={post.slug} className="card border border-gray-100 group flex flex-col">
                  <div className="relative h-48 -mx-6 -mt-6 mb-5 overflow-hidden rounded-t-2xl">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary-50 text-primary-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-2 flex-1 group-hover:text-primary-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <Calendar size={11} />
                      {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-800 font-medium text-sm flex items-center gap-1 transition-colors"
                    >
                      Read <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

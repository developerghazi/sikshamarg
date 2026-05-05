import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { blogPosts, siteConfig } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.coverImage] },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-pattern py-16">
        <div className="container-custom text-white max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Tag size={10} /> {post.category}
            </span>
            <span className="text-blue-200 text-xs flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
            <span className="text-blue-200 text-xs flex items-center gap-1">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">{post.title}</h1>
          <p className="text-blue-100 text-lg">{post.excerpt}</p>
          <nav className="flex items-center gap-2 mt-6 text-sm text-blue-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span>/</span>
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Article */}
            <article className="lg:col-span-2">
              <div className="relative h-64 md:h-80 mb-8 rounded-2xl overflow-hidden shadow-md">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
              </div>

              {/* Markdown-like content rendered as prose */}
              <div className="prose prose-blue max-w-none">
                {post.content.split("\n").map((line, idx) => {
                  if (line.startsWith("## "))
                    return <h2 key={idx} className="font-heading font-bold text-2xl text-gray-900 mt-8 mb-3">{line.replace("## ", "")}</h2>;
                  if (line.startsWith("### "))
                    return <h3 key={idx} className="font-heading font-semibold text-xl text-gray-800 mt-6 mb-2">{line.replace("### ", "")}</h3>;
                  if (line.startsWith("**") && line.endsWith("**"))
                    return <p key={idx} className="font-semibold text-gray-900 my-2">{line.replace(/\*\*/g, "")}</p>;
                  if (line.startsWith("- "))
                    return <li key={idx} className="ml-5 list-disc text-gray-600 my-1">{line.replace("- ", "")}</li>;
                  if (line.trim() === "") return <br key={idx} />;
                  return <p key={idx} className="text-gray-600 leading-relaxed my-2">{line}</p>;
                })}
              </div>

              {/* Share */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                <p className="text-sm text-gray-500">Found this helpful? Share it!</p>
                <div className="flex gap-3">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + siteConfig.domain + "/blog/" + post.slug)}`}
                    target="_blank" rel="noreferrer"
                    className="bg-green-500 text-white text-xs px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                  >WhatsApp</a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://" + siteConfig.domain + "/blog/" + post.slug)}`}
                    target="_blank" rel="noreferrer"
                    className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >LinkedIn</a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA */}
              <div className="bg-primary-700 text-white rounded-2xl p-6">
                <h4 className="font-heading font-bold text-lg mb-2">Need Admission Help?</h4>
                <p className="text-blue-200 text-sm mb-4">Book a free 30-min consultation with our experts.</p>
                <Link href="/contact" className="btn-accent justify-center w-full text-sm">
                  Book Free Session <ArrowRight size={14} />
                </Link>
              </div>

              {/* Related */}
              <div>
                <h4 className="font-heading font-semibold text-gray-900 mb-4">Related Articles</h4>
                <div className="space-y-4">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} className="flex gap-3 group">
                      <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
                        <Image src={r.coverImage} alt={r.title} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">{r.title}</p>
                        <p className="text-xs text-gray-400 mt-1">{r.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/blog" className="flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium transition-colors">
              <ArrowLeft size={16} /> Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

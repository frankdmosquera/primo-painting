import { blogPosts } from "@/lib/blog-data";

import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

import BgBackground2 from "@/public/above-gallery-bg-line.svg";

import BlogGrid from "@/components/blog-grid";

import BlogNestedHero from "@/components/BlogNestedHero";
import { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post?.slug,
  }));
}
export type paramsType = Promise<{ slug: string }>;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params)?.slug;
  let post;
  if (slug) {
    post = blogPosts?.find((post) => post?.slug === slug);
  }

  return {
    title: `${post?.metaTitle}`,
    description: `${post?.metaDescription}`,
    alternates: {
      canonical: `https://www.albertacolourpainting.com/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: paramsType }) {
  const slug = (await params)?.slug;
  let post;
  if (slug) {
    post = blogPosts?.find((post) => post?.slug === slug);
  }
  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogNestedHero title={post.title} imageSrc={post.thumb} />
      <div className="relative">
        <div className="absolute  z-[-2]">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-[500px] z-[-2]">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
      </div>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/blogs"
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to all posts
        </Link>

        <article className="bg-white rounded-lg overflow-hidden ">
          <div className="p-6">
            <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
              {post.date}
            </p>
            <h1 className="text-2xl font-bold text-[#0D378D] mt-2 mb-4">
              {post.title}
            </h1>

            <div className="prose max-w-none">
              <p className="text-black text-sm mb-4">{post.excerpt}</p>

              <h2 className="text-xl font-semibold mt-6 mb-3 text-black">
                {post.heading}
              </h2>

              <div
                className="text-black mb-4"
                dangerouslySetInnerHTML={{ __html: post.description }}
              />

              <div className="my-12">
                <Image src={post.imageUrl} alt={post.alt} />
              </div>

              <h2 className="text-xl font-semibold mt-6 mb-3 text-[#0D378D]">
                {post.subHeading}
              </h2>

              <div
                className="text-black mb-4"
                dangerouslySetInnerHTML={{ __html: post.subDescription }}
              />

              <h2 className="text-xl font-semibold mt-6 mb-3 text-black">
                {post.conclusion}
              </h2>

              <div
                className="text-black mb-4"
                dangerouslySetInnerHTML={{ __html: post.conclusionDescription }}
              />
            </div>
          </div>
        </article>
      </main>
      <main className="container mx-auto px-4 py-8 lg:mb-20  ">
        <BlogGrid
          posts={
            blogPosts && blogPosts.length > 0
              ? blogPosts.filter((post) => post?.slug !== slug).slice(0, 3)
              : []
          }
        />
      </main>
    </>
  );
}

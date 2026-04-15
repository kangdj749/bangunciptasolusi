import { getBlogPosts } from "@/lib/googleSheetsBlog"
import BlogCard from "@/components/blog/BlogCard"

export default async function BlogPage(){

 const posts = await getBlogPosts()

 return(

 <main className="max-w-6xl mx-auto px-4 py-10">

 <header className="mb-10">

 <h1 className="text-2xl font-semibold">
 Insight & Artikel Properti
 </h1>

 <p className="text-sm text-neutral-600 mt-2">
 Panduan arsitektur, tata ruang, dan perizinan bangunan.
 </p>

 </header>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

 {posts.map((post)=>(
 <BlogCard key={post.slug} post={post}/>
 ))}

 </div>

 </main>

 )
}
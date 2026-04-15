import NavbarClient from "./NavbarClient"
import { getBlogPosts } from "@/lib/googleSheetsBlog"

export default async function Navbar() {

  const posts = await getBlogPosts()

  return <NavbarClient posts={posts} />

}
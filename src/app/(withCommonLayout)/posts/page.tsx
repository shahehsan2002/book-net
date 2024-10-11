import PostCard from "@/components/ui/PostCard";
import { getAllPosts } from "@/services/PostServices";
import { TPost } from "@/types";

const AllPostsPage = async() => {
  const posts = await getAllPosts("ssr",true);
  return (
    <div className="my-16 w-[90%] mx-auto">
      <h1 className="text-5xl font-bold text-center animate-fade-in">
        Latest <span className="text-fuchsia-800">Posts</span>
      </h1>
      <p className="text-gray-400 text-center italic w-3/4 mx-auto mt-4 animate-slide-up">
        Discover, review, and rate your favorite books. Join a community of book lovers and share your reading experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-8">
        {posts.map((post:TPost) => (
          <PostCard key={post.id} post={post} className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl hover:bg-gray-100 hover:border-fuchsia-800 border rounded-lg" />
        ))}
      </div>
    </div>
  )
}

export default AllPostsPage;
import Banner from "@/components/banner/Banner";
import LatestPosts from "@/components/latestPosts/LatestPost";
import { getAllPosts } from "@/services/PostServices";

const HomePage = async () => {
  const posts = await getAllPosts("isr");

  return (
    <>
      <Banner />

      {posts.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-screen space-y-4">
          <h1 className="text-4xl font-bold text-center text-red-600">
            404! No Posts Found
          </h1>
          <p className="text-lg text-center text-gray-600">
            It seems like there are no posts available at the moment.
          </p>
          <div className="flex justify-center items-center space-x-2">
            <a href="/" className="bg-fuchsia-500 text-white px-4 py-2 rounded-lg shadow hover:bg-fuchsia-600 transition duration-300">
              Go Back Home
            </a>
            <a href="/create-post" className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300">
              Create a Post
            </a>
          </div>
        </div>
      ) : (
        <LatestPosts posts={posts} />
      )}
    </>
  );
};

export default HomePage;

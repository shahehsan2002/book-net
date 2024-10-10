// import { TPost } from "@/types";
// import Image from "next/image";
// import Link from "next/link";

// const PostCard = ({ post }: { post: TPost }) => {
//   return (
//     <div className="card bg-base-100 w-96 shadow-xl">
//       <figure>
//         <Image src={post.image} alt="Shoes" width={200} height={200} />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">
//           <p>{post.name}</p>
//           <div className="badge p-3 bg-fuchsia-500">{post.category}</div>
//         </h2>

//         <div className="card-actions justify-end">{post.description}</div>
//         <Link
//           href={`/posts/${post.id}`}
//           className="font-semibold text-end text-sm underline text-fuchsia-800"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default PostCard;

import { TPost } from "@/types";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }: { post: TPost }) => {
  return (
    <div className="card bg-white w-96 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500 relative hover:shadow-[0_4px_15px_rgba(249,168,212,0.5)] hover:-translate-y-2">
      <figure className="overflow-hidden">
        <Image
          src={post.image}
          alt={post.name}
          width={300}
          height={200}
          className="transition-transform transform hover:scale-110 duration-500"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title flex justify-between items-center">
          <p className="text-lg font-semibold transition-opacity duration-700">{post.name}</p>
          <div className="badge p-3 bg-fuchsia-500 text-white transition-transform duration-500 hover:bg-fuchsia-700 hover:scale-125 animate-bounce">
            {post.category}
          </div>
        </h2>

        <p className="text-gray-500 mt-3 line-clamp-3 opacity-0 transition-opacity duration-500 delay-200 hover:opacity-100">
          {post.description}
        </p>

        <Link
          href={`/posts/${post.id}`}
          className="font-semibold text-sm mt-4 text-fuchsia-800 hover:text-fuchsia-600 transition-colors duration-300 block text-end underline opacity-0 transition-opacity duration-500 delay-300 hover:opacity-100"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

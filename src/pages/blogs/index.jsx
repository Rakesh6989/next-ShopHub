export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
export default function BlogsPage({ posts }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">All Blogs</h1>
      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded bg-white text-black shadow"
          >
            <a
              href={`/blogs/${post.id}`}
              className="text-xl text-blue-600 font-semibold"
            >
              {post.title}
            </a>
            <p className="text-gray-700 mt-1">{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

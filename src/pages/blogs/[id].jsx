export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    const paths = posts.slice(0, 3).map((post) => ({
      params: { id: post.id.toString() },
    }));
    return {
      paths,
      fallback: false,
    };
  }
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
  
    return {
      props: {
        post,
      },
    };
  }
  
  export default function BlogDetail({ post }) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
      </div>
    );
  }
  
import { useRouter } from "next/router";
function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}
export default Post;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: {
        postid: `${post.id}`,
      },
    };
  });

  return {
    paths: [
      { params: { postid: "1" } },
      { params: { postid: "2" } },
      { params: { postid: "3" } },
    ],
    // paths,
    fallback: true,
  };
}

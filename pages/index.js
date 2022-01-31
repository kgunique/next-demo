import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Pre Rendering of Data</h1>
      <Link href="/users">
        <a> Users List </a>
      </Link>
      <Link href="/posts">
        <a> Post</a>
      </Link>
      <Link href="/products">
        <a> Product</a>
      </Link>
      <Link href="/news">
        <a> News</a>
      </Link>
    </>
  );
}

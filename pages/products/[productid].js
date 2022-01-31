import { useRouter } from "next/router";
function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>
        {product.id} {product.name}
      </h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <hr />
    </>
  );
}
export default Product;

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productid}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}

// export async function getStaticPaths() {
//   const response = await fetch("http://localhost:4000/products");
//   const data = await response.json();
//   const paths = data.map((product) => {
//     return {
//       params: {
//         productid: `${product.id}`,
//       },
//     };
//   });

//   return {
//     paths: [
//       { params: { productid: "1" } },
//       // { params: { postid: "2" } },
//       // { params: { postid: "3" } },
//     ],
//     // paths,
//     fallback: "true",
//   };
// }

export async function getStaticPaths() {
  return {
    paths: [{ params: { productid: "1" } }],
    fallback: true,
  };
}

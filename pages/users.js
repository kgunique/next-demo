import User from "../components/user";

function UserList({ user }) {
  return (
    <>
      <h1>Pre Rendering of Data</h1>
      {user.map((item) => {
        return (
          <div key={item.id}>
            <User item={item} />
          </div>
        );
      })}
    </>
  );
}

export default UserList;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await response.json();
  // console.log(user);

  return {
    props: {
      user: user,
    }, // will be passed to the page component as props
  };
}

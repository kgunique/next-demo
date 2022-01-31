function User({ item }) {
  return (
    <>
      <p>{item.name}</p>
      <small>
        <strong>{item.email}</strong>
      </small>
    </>
  );
}

export default User;

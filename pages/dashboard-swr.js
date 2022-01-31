import useSWR from "swr";
function DashboardSWR() {
  const fetcher = async () => {
    const response = await fetch("http://localhost:4000/dashboard/");
    const data = await response.json();
    return data;
  };
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return <h1>Some Error occurs</h1>;
  if (!data) return <h3>Loading</h3>;
  return (
    <>
      <h1>New Dashboard</h1>
      <h2>Post - {data.post}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Comment - {data.comment}</h2>
      <h2>Share - {data.share}</h2>
    </>
  );
}

export default DashboardSWR;

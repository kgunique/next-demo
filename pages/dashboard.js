import { useEffect, useState } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState();
  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard/");
      const data = await response.json();
      setDashboardData(data);
      // console.log(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Post - {dashboardData.post}</h1>
      <h1>Likes - {dashboardData.likes}</h1>
      <h1>Comment - {dashboardData.comment}</h1>
      <h1>Share - {dashboardData.share}</h1>
    </>
  );
}
export default Dashboard;

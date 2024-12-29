import { useUser } from "@/context/UserContext";
import { useEffect } from "react";
// import OneBusiness from "@/components/OneBusiness";
const Home = () => {
  const { fetchUser, user, isGuest } = useUser();
  console.log(user);
  console.log(isGuest);

  useEffect(() => {
    const fetchUserData = async () => await fetchUser();
    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <p>Email: {user.email}</p>
          <p>Plan: {user.plan}</p>
          {/* <p>Saved Businesses: {user.savedBusinesses.length}</p> */}
          {/* <p>Own Businesses: {user.ownBusinesses.length}</p> */}
        </div>
      ) : (
        // <OneBusiness business={}/>
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Home;

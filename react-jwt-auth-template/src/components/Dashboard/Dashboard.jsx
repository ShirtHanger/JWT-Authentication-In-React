// src/components/Dashboard.jsx

/* props isn't being used here, directly accessing user object */
const Dashboard = ({ user }) => {

  console.log(user)

    return (
      <main>
        <h1>Welcome, {user.username}</h1>
        <p>
          This is the dashboard page where you, and only you, can see a dashboard
          of all of your things.
        </p>
      </main>
    )
  }
  
  export default Dashboard
  
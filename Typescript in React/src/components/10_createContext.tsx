import { createContext, useContext } from "react";

// Create Context
const UserContext = createContext("Guest");

function Home() {
  return (
    <div>
      <Profile />
    </div>
  );
}

function Profile() {
  // Use Context
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}

export default function App() {
  return (
    <UserContext.Provider value="Deva">
      <Home />
    </UserContext.Provider>
  );
}
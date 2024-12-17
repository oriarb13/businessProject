// get all users
async function fetchUsers() {
    const url = "http://localhost:3000/api/users";
    
    try {
      const response = await fetch(url);      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const users = await response.json();
      console.log(users);
      
      return users;
    
      
    } catch (error) {
      console.error(`Error fetching users from ${url}:`, error.message);
      return [];  
    }
}
  // get random user
  async function fetchRandomUser() {
    try {
      const response = await fetch("http://localhost:3000/api/users/random");
      return await response.json();
    } catch (error) {
      console.error("Error fetching random user:", error);
    }
  }
  
  // get user by id
  async function fetchUserById(id) {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching user by ID:", error);
    }
  }
  
  // add user
  async function addUser(newUser) {
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });
      return await response.json();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }
  
  // edit user
  async function editUser(id, newUser) {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });
      return await response.json();
    } catch (error) {
      console.error("Error editing user:", error);
    }
  }
  
  export { fetchUsers, fetchRandomUser, fetchUserById, addUser, editUser };
  
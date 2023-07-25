import { useState, useEffect } from "react";

function Users() {
  const [userList, setUserList] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  async function getUsers() {
    const response = await fetch(url);
    const userData = await response.json();
    setUserList(userData);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1 className="text-4xl">Users</h1>
      {userList.map((user, index) => {
        return <h1 key={"user-list" + index}>Name: {user.name}</h1>;
      })}

      <table className="table-auto">
        <tbody>
          {userList.map((user, index) => {
            return (
              <tr className="border" key={"user-table" + index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <a className="text-blue-500" href={user.website}>
                    {user.website}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Users;

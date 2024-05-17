import React, { useEffect, useState } from 'react';
import UserListItem from '../Components/UserListItem';

function DbOperations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the Node.js server
    fetch('http://localhost:4000/getquery')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
        <center>
      <h3>Data From DataBase</h3>
      <ul>
        {data.map((employee) => (
            <UserListItem name={employee.emp_name} role={employee.emp_role} key={employee.emp_id}/>
        ))}
      </ul>
      </center>
    </div>
  );
}

export default DbOperations;

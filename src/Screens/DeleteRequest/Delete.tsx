import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const Delete = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      const { data }: any = await axios.get(
        "https://fullstack-student-backend.onrender.com/api/auth"
      );

      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((list: any) => (
            <>
              <tr>
                <td>{list?.firstName}</td>
                <td>{list?.lastName}</td>
                <td>{list?.email}</td>
                <td>
                  <MdEdit />
                </td>
                <td>
                  <MdDelete style={{ color: "red" }} />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Delete;

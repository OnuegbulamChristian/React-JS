import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState<any>({});
  //   console.log(id);
  console.log(userData);
  useEffect(() => {
    const fetchData = async () => {
      const { data }: any = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      setUserData(data);
    };
    fetchData();
  }, []);
  return <div>{userData?.email}</div>;
};

export default UserProfile;

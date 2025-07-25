import React, { useContext, useEffect, useState } from "react";
import { DriverDataContext } from "../../context/DriverContext";
import { useNavigate } from "react-router";
import axios from "axios";

const DriverProtectWrapper = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setDriver } = useContext(DriverDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/driver-login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/drivers/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setDriver(response.data.driver);
          setIsLoading(false);
        }
      })
      .catch((err: any) => {
        console.log("Error from wrapper : ", err.message);

        localStorage.removeItem("token");
        navigate("/driver-login");
      });
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default DriverProtectWrapper;

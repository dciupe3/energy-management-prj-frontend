import DeviceList from "../../components/device/DeviceList";
import "../../components/ui/Mini.css";
import React, { useEffect, useState } from "react";
import * as API_DEVICES from "./Device-API";

function AllDevicesClient() {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API_DEVICES.getDevicesClient(
      localStorage.getItem("userId"),
      (data, status, err) => {
        if (status === 200) {
          setDevices(data);
        } else {
          console.error("An error occurred while fetching devices:", err);
        }
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading... </p>
      </section>
    );
  }

  return (
    <div className="mini">
      <section>
        <h1>All Devices </h1>
        <DeviceList devices={devices} />
      </section>
    </div>
  );
}

export default AllDevicesClient;

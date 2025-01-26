import React from "react";

import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import AdminAddService from "./AdminAddService";

import { IRateCardServiceProps } from "../../../types/Admin/AdminRateCard.types";

const AdminRateCardServiceContent = ({
  services,
  setServices,
}: IRateCardServiceProps) => {
  const handleNextClick = (idx: number) => {
    const newArrServices = [...services];
    newArrServices.splice(idx, 0, {
      newService: true,
      name: "",
      image: {
        url: "",
      },
      levels: [
        {
          name: "",
          joints: {
            joint_name: false,
            joint_tech: false,
            joint_cost: false,
          },
          values: [
            {
              technology: "",
              cost: "",
            },
          ],
        },
      ],
    });
    setServices(newArrServices);
  };

  return (
    <>
      {services?.map((service, idx) => (
        <AdminBlockDropDown
          key={`${service.name}${idx}`}
          title={service.name || "ADD SERVICE"}
          style={{ width: "100%" }}
          nextBtn
          onNextClick={() => handleNextClick(idx + 1)}
        >
          <AdminAddService
            servicesAvailable={services.length}
            service={service}
          />
        </AdminBlockDropDown>
      ))}
    </>
  );
};

export default AdminRateCardServiceContent;

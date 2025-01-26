import React, { useState } from "react";
import { Formik } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddRateCardImage from "./AddRateCardImage";
import PlusBtn from "./plusBtn";
import SaveBtn from "../Global/SaveBtn";
import TrashIconBtn from "./trashIconBtn";
import RateCardLevelsInput from "./RateCardLevelsInput";

import {
  IAddServiceProps,
  IService,
} from "../../../types/Admin/AdminRateCard.types";

import {
  AddRateCardInfo,
  AdminAddServiceWrapper,
  DeleteBtn,
  RateCardBtnContainer,
  ServiceInput,
  ServiceInputLabel,
} from "../../../styles/AdminRateCard.styled";

import { queryKeys } from "../../../consts/queryKeys";

import { adminRateCardService } from "../../../services/adminRateCard";

const AdminAddService = ({ servicesAvailable, service }: IAddServiceProps) => {
  const queryClient = useQueryClient();

  const [addRateCardInfo, setAddRateCardInfo] = useState(service.newService);

  const { mutateAsync: createService } = useMutation(
    [queryKeys.createRateCardService],
    async (data: IService) => {
      return await toast.promise(
        adminRateCardService.createRateCardService(data),
        {
          pending: "Pending update",
          success: "Rate card service created 👌",
          error: "Some things went wrong 🤯",
        }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getRateCardData]);
      },
    }
  );

  const { mutateAsync: updateServiceById } = useMutation(
    [queryKeys.updateRateCardService],
    async (data: IService) => {
      return await toast.promise(
        adminRateCardService.updateRateCardService(data),
        {
          pending: "Pending update",
          success: "Rate card updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getRateCardData]);
      },
    }
  );

  const { mutateAsync: deleteServiceById } = useMutation(
    [queryKeys.deleteRateCardService],
    async (id: string) => {
      return await toast.promise(
        adminRateCardService.deleteRateCardService(id),
        {
          pending: "Pending update",
          success: "Service card deleted 👌",
          error: "Some things went wrong 🤯",
        }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getRateCardData]);
      },
    }
  );

  const handleClick = () => {
    setAddRateCardInfo(false);
  };

  const handleDelete = (id: string) => {
    deleteServiceById(id);
  };

  const handleCreate = (service: IService) => {
    delete service.newService;
    createService(service);
  };

  const handleUpdate = (service: IService) => {
    updateServiceById(service);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={service}
      onSubmit={(values) =>
        values.newService ? handleCreate(values) : handleUpdate(values)
      }
    >
      {({ handleSubmit, values }) => (
        <>
          <AdminAddServiceWrapper>
            <AddRateCardImage />
            <div>
              <ServiceInputLabel>Service</ServiceInputLabel>
              <ServiceInput name="name" placeholder="Enter service" />
            </div>
          </AdminAddServiceWrapper>
          {addRateCardInfo && (
            <AddRateCardInfo onClick={handleClick}>
              <PlusBtn />
              Add information about rate card
            </AddRateCardInfo>
          )}
          {!addRateCardInfo && <RateCardLevelsInput />}
          <RateCardBtnContainer>
            <SaveBtn
              style={{
                width: "226px",
                height: "58px",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              handleClick={handleSubmit}
            />
            <DeleteBtn
              disabled={servicesAvailable === 1}
              onClick={() => values._id && handleDelete(values._id)}
            >
              <TrashIconBtn />
              Delete Block
            </DeleteBtn>
          </RateCardBtnContainer>
        </>
      )}
    </Formik>
  );
};

export default AdminAddService;

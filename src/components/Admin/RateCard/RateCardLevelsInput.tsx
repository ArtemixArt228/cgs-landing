import React from "react";

import { Field, FieldArray, useFormikContext } from "formik";

import PlusBtn from "./plusBtn";
import TrashIconBtn from "./trashIconBtn";

import { IService } from "../../../types/Admin/AdminRateCard.types";

import {
  AddNextLevel,
  AddNextTechCost,
  JointCheckboxWrapper,
  RateCardCost,
  RateCardJointWrapper,
  RateCardLevelWrapper,
  RateCardTechCostWrapper,
  RateCardTechnology,
  RateCartLevel,
} from "../../../styles/AdminRateCard.styled";

const RateCardLevelsInput = () => {
  const { values } = useFormikContext<IService>();

  const newLevel = {
    name: "",
    joints: {
      joint_name: false,
      joint_cost: false,
      joint_tech: false,
    },
    values: [
      {
        technology: "",
        cost: "",
      },
    ],
  };

  const newValue = {
    technology: "",
    cost: "",
  };

  return (
    <FieldArray
      name="levels"
      render={({ insert, remove }) => (
        <>
          {values.levels.map((level, idx) => (
            <RateCardLevelWrapper key={`${idx}`}>
              <div style={{ maxWidth: "182px" }}>
                <RateCardJointWrapper>
                  <span>Level</span>
                  <JointCheckboxWrapper>
                    <Field
                      type="checkbox"
                      id={`levels[${idx}].joints.joint_name.${values._id}`}
                      name={`levels[${idx}].joints.joint_name`}
                    />
                    <label
                      htmlFor={`levels[${idx}].joints.joint_name.${values._id}`}
                    >
                      joint level
                    </label>
                  </JointCheckboxWrapper>
                </RateCardJointWrapper>

                <RateCartLevel
                  placeholder="Enter level..."
                  name={`levels[${idx}].name`}
                />
              </div>
              <AddNextLevel onClick={() => insert(idx + 1, newLevel)}>
                <PlusBtn />
                Add next level
              </AddNextLevel>
              <RateCardTechCostWrapper>
                <div style={{ width: "100%" }}>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "100%" }}>
                      <RateCardJointWrapper>
                        <span>Technology</span>
                        <JointCheckboxWrapper>
                          <Field
                            type="checkbox"
                            id={`levels[${idx}].joints.joint_tech.${values._id}`}
                            name={`levels[${idx}].joints.joint_tech`}
                          />
                          <label
                            htmlFor={`levels[${idx}].joints.joint_tech.${values._id}`}
                          >
                            joint tech
                          </label>
                        </JointCheckboxWrapper>
                      </RateCardJointWrapper>
                    </div>
                    <div style={{ minWidth: "225px" }}>
                      <RateCardJointWrapper className={"costWrapper"}>
                        <span>Cost</span>
                        <JointCheckboxWrapper>
                          <Field
                            type="checkbox"
                            id={`levels[${idx}].joints.joint_cost.${values._id}`}
                            name={`levels[${idx}].joints.joint_cost`}
                          />
                          <label
                            htmlFor={`levels[${idx}].joints.joint_cost.${values._id}`}
                          >
                            joint rate
                          </label>
                        </JointCheckboxWrapper>
                      </RateCardJointWrapper>
                    </div>
                  </div>
                  <FieldArray name={`levels[${idx}].values`}>
                    {(valuesHelpers) => (
                      <>
                        {level.values.map((value, valIdx) => (
                          <div
                            key={`${valIdx}`}
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <div style={{ width: "100%" }}>
                              <RateCardTechnology
                                className={
                                  valIdx !== level.values.length - 1
                                    ? "noBorder"
                                    : ""
                                }
                                placeholder="Enter technology..."
                                name={`levels[${idx}].values[${valIdx}].technology`}
                              />
                            </div>
                            <div style={{ minWidth: "225px" }}>
                              <RateCardCost
                                className={
                                  valIdx !== level.values.length - 1
                                    ? "noBorder"
                                    : ""
                                }
                                placeholder="Enter cost..."
                                name={`levels[${idx}].values[${valIdx}].cost`}
                              />
                            </div>
                            <TrashIconBtn
                              onClick={() =>
                                level.values.length === 1
                                  ? remove(idx)
                                  : valuesHelpers.remove(valIdx)
                              }
                            />
                          </div>
                        ))}
                        <AddNextTechCost
                          onClick={() => valuesHelpers.push(newValue)}
                        >
                          [ +add next ]
                        </AddNextTechCost>
                      </>
                    )}
                  </FieldArray>
                </div>
              </RateCardTechCostWrapper>
            </RateCardLevelWrapper>
          ))}
        </>
      )}
    />
  );
};

export default RateCardLevelsInput;

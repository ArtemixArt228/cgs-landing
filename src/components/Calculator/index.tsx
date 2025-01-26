import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { Formik, FormikHelpers } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";

import BlackButtonComponent from "../BlackButtonWithArrow";
import CalculatorPagerComponent from "./CalculatorPagerComponent";
import CalculatorStepsComponent from "./CalculatorStepsComponent";
import CalculatorField from "./CalculatorTitleField";
import CalculatorInputField from "./CalculatorInputs";
import CalculatorCompletedPager from "./CalculatorCompletedPager";

import {
  ICalculatorFormValuesProps,
  ICalculatorPostEmailResultsProps,
  ICalculatorPostLeadEmailResultsProps,
  IRoles,
  IStepOptions,
  ICalculatorStep,
} from "../../types/Admin/Response.types";
import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

import { queryKeys } from "../../consts/queryKeys";
import { ICalendlyUserData } from "../../types/ModalCategory.types";
import { adminCalculatorService } from "../../services/adminCalculator";
import { SplitBrackets } from "../../utils/splitBrackets";
import { getResults } from "../../utils/getCalculatorResults";
import { DisableScrollBarHandler } from "../../utils/disableScrollBarHandler";
import { CalculatorValidation } from "../../validations/CalculatorValidation";
import { useRouter } from "next/router";

interface ICalculatorProps {
  isChatOpen: boolean;
  setIsChatOpen: Dispatch<SetStateAction<boolean>>;
  setIsShowingBubble: Dispatch<SetStateAction<boolean>>;
  setIsShowingCross: Dispatch<SetStateAction<boolean>>;
  setIsCalendlyOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCalendlyUserData: React.Dispatch<React.SetStateAction<ICalendlyUserData>>;
  isCalendlyOpen: boolean;
}

const Calculator = ({
  isChatOpen,
  setIsChatOpen,
  setIsShowingCross,
  setIsShowingBubble,
  setIsCalendlyOpen,
  setCalendlyUserData,
  isCalendlyOpen,
}: ICalculatorProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("< start >");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [startLoading, setStartLoading] = useState<boolean>(false);
  const [isBlockchain, setIsBlockchain] = useState<boolean>(false);
  const [isChosen, setIsChosen] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [previousSteps, setPreviousSteps] = useState<number[]>([]);
  const [finishPagerClick, setFinishPagerClick] = useState<boolean>(false);
  const [calculateIsClicked, setCalculateIsClicked] = useState<boolean>(false);
  const [isQuitting, setIsQuitting] = useState<boolean>(false);
  const [warnIsShow, setWarnIsShow] = useState<boolean>(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const hoverRef = useRef<any>(null);
  const timeoutRef = useRef<any>(null);

  const router = useRouter();
  const pathname = router.pathname;

  const { data } = useQuery([queryKeys.getCalculatorData], () =>
    adminCalculatorService.getCalculatorData()
  );

  const { data: classicStepsData } = useQuery(
    [queryKeys.getCalculatorClassicSteps],
    () => adminCalculatorService.getCalculatorClassicSteps(),
    { enabled: startLoading }
  );

  const { data: blockchainStepsData } = useQuery(
    [queryKeys.getCalculatorBlockchainSteps],
    () => adminCalculatorService.getCalculatorBlockchainSteps(),
    { enabled: startLoading }
  );

  const handleOpen = () => {
    setIsOpen(true);
    const query = { calculator: "open" };

    router.replace({
      pathname,
      query,
    });
  };

  const handleClose = () => {
    setIsChosen(false);
    setIsOpen(false);
    setStartLoading(false);
    setIsCompleted(false);
    setIsBlockchain(false);
    setFinishPagerClick(false);
    setCalculateIsClicked(false);
    setIsQuitting(false);
    setWarnIsShow(false);
    setStep(0);
    setPreviousSteps([]);
    setButtonText("< start >");
  };

  const handleQuit = () => {
    setIsQuitting(true);
  };

  const handleCompletedPagerButtonsClick = () => {
    setFinishPagerClick(true);
  };

  const handleBackCompletePagerButtonsClick = () => {
    setFinishPagerClick(false);
  };

  const handleButtonClick = () => {
    setStartLoading(true);
    setButtonText("< choose >");
  };

  const handleBlockchainClick = () => {
    setIsChosen(true);
    setIsBlockchain(true);
  };

  const handleClassicClick = () => {
    setIsChosen(true);
    setIsBlockchain(false);
  };

  const { mutate } = useMutation(
    [queryKeys.sendEmailResults],
    (answers: ICalculatorPostEmailResultsProps) =>
      adminCalculatorService.sendResultsEmail(answers),
    {
      onSuccess: () => setIsCompleted(true),
    }
  );

  const { mutate: mutateLeadEmail } = useMutation(
    [queryKeys.sendLeadEmailResults],
    (answers: ICalculatorPostLeadEmailResultsProps) =>
      adminCalculatorService.sendResultsLeadEmail(answers)
  );

  const blockchainSortedData =
    blockchainStepsData &&
    blockchainStepsData.sort((a: any, b: any) => {
      const numA = parseInt(a._id, 16);
      const numB = parseInt(b._id, 16);

      return numA - numB;
    });

  const classicSortedData =
    classicStepsData &&
    classicStepsData.sort((a: any, b: any) => {
      const numA = parseInt(a._id, 16);
      const numB = parseInt(b._id, 16);

      return numA - numB;
    });

  const stepsData = isBlockchain ? blockchainSortedData : classicSortedData;

  const initialValues = stepsData && {
    questionsArr: stepsData.map((el) => {
      return {
        title: el.title,
        answer: "",
        subStepAnswer: "",
        subStepRequired: el.subStepRequired || "",
      };
    }),
    email: "",
    name: "",
    isBlockchain,
  };

  const countData = (
    obj: { [key: string]: number },
    role: string,
    coef: number
  ) => (obj[role] ? (obj[role] += coef || 0) : (obj[role] = coef || 0));

  const onSubmit = (
    values: ICalculatorFormValuesProps,
    { resetForm }: FormikHelpers<ICalculatorFormValuesProps>
  ) => {
    const { questionsArr, isBlockchain, email, name } = values;

    const getRolesCoefObject = (
      matchData: Array<IStepOptions | Array<IStepOptions> | undefined>,
      resultObj: { [key: string]: number }
    ) => {
      matchData.map((dataEl) => {
        if (dataEl) {
          return Array.isArray(dataEl)
            ? dataEl.forEach(
                (matchDataEl) =>
                  matchDataEl.endRole &&
                  matchDataEl.endRole.role &&
                  matchDataEl.endRole.coef &&
                  countData(
                    resultObj,
                    matchDataEl.endRole.role,
                    matchDataEl.endRole.coef
                  )
              )
            : dataEl.endRole &&
                dataEl.endRole.role &&
                dataEl.endRole.coef &&
                countData(resultObj, dataEl.endRole.role, dataEl.endRole.coef);
        }
      });
      return resultObj;
    };

    const getRolesHoursObject = (
      matchData: Array<IStepOptions | Array<IStepOptions> | undefined>,
      resultObj: { [key: string]: number }
    ) => {
      matchData.map((dataEl) => {
        if (dataEl) {
          return Array.isArray(dataEl)
            ? dataEl.forEach(
                (matchDataEl) =>
                  matchDataEl.roles &&
                  matchDataEl.hours &&
                  countData(
                    resultObj,
                    matchDataEl.roles.sort().join(", "),
                    matchDataEl.hours
                  )
              )
            : dataEl.hours &&
                dataEl.roles &&
                countData(
                  resultObj,
                  dataEl.roles.sort().join(", "),
                  dataEl.hours
                );
        }
      });
      return resultObj;
    };

    const emailCalculation = (
      definedStepData: void | ICalculatorStep[] | undefined
    ) => {
      if (!definedStepData) return;

      const matchData: Array<IStepOptions | Array<IStepOptions> | undefined> =
        questionsArr.map((question, idx) =>
          typeof question.answer === "string"
            ? definedStepData[idx].options.find(
                (option) => question.answer === option.label
              )
            : definedStepData[idx].options.filter((option) =>
                (question.answer as string[]).includes(option.label)
              )
        );

      const matchSubStepData: Array<
        IStepOptions | Array<IStepOptions> | undefined
      > = questionsArr.map((question, idx) => {
        if (
          definedStepData[idx].subSteps &&
          definedStepData[idx].subSteps.length > 0
        ) {
          return typeof question.subStepAnswer === "string"
            ? definedStepData[idx].subSteps[0].options.find(
                (option) => question.subStepAnswer === option.label
              )
            : definedStepData[idx].subSteps[0].options.filter((option) =>
                (question.subStepAnswer as string[]).includes(option.label)
              );
        }
      });

      const resultObj: IRoles = {};
      getRolesHoursObject(matchData, resultObj);
      getRolesHoursObject(matchSubStepData, resultObj);

      const resultObjRolesCoef: IRoles = {};
      getRolesCoefObject(matchData, resultObjRolesCoef);
      getRolesCoefObject(matchSubStepData, resultObjRolesCoef);

      Object.entries(resultObjRolesCoef).map((roleCoefArr) =>
        resultObj[roleCoefArr[0]]
          ? (resultObj[roleCoefArr[0]] *= 1 + roleCoefArr[1])
          : undefined
      );

      const endCoef =
        1 + getResults(definedStepData, values.questionsArr, "endCoef");

      Object.entries(resultObj).forEach(
        (el) => (resultObj[el[0]] = Math.round(el[1] * endCoef))
      );

      const getPriceInConnectedRole = (roles: string[], hours: number) => {
        if (data) {
          const resultPrices = data.roles
            .map((dataRole) => {
              if (roles.includes(dataRole.name)) {
                return dataRole.rate;
              }
            })
            .filter((el) => el);

          return (
            ((resultPrices as number[]).reduce(
              (a, b) => (a || 0) + (b || 0),
              0
            ) /
              resultPrices.length) *
            hours
          );
        }
      };

      const blockchainHourRate = getResults(
        definedStepData,
        values.questionsArr,
        "hourRate"
      );

      const price =
        data &&
        Object.keys(resultObj)
          .map((role) => {
            return role.split(", ").length === 1
              ? Math.round(
                  role === "Blockchain"
                    ? (resultObj[role] || 0) * blockchainHourRate
                    : (resultObj[role] || 0) *
                        (data?.roles.find((dataRole) => dataRole.name === role)
                          ?.rate || 0)
                )
              : getPriceInConnectedRole(role.split(", "), resultObj[role]);
          })
          .reduce((acc, curr) => (acc ?? 0) + (curr ?? 0), 0);

      const hours = Object.values(resultObj).reduce((a, b) => a + b, 0);
      const uxui = getResults(definedStepData, values.questionsArr, "uxui");

      if (
        typeof hours === "number" &&
        typeof uxui === "number" &&
        typeof price === "number"
      ) {
        const emailData: ICalculatorPostEmailResultsProps = {
          answers: questionsArr,
          isBlockchain,
          estimation: { uxui, hours, price },
          email,
          name,
        };
        mutate(emailData);
        resetForm();
      }
    };

    emailCalculation(stepsData);
  };

  const handleMouseOver = () => {
    if (window.innerWidth > 768) {
      setIsHovered(true);
    }
    clearTimeout(timeoutRef.current);
    setIsShowingBubble(false);
    setIsShowingCross(false);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 1500);
  };

  const handleCloseChat = () => {
    setIsCalculatorOpen((prev) => !prev);
    setIsHovered((prev) => !prev);

    setIsChatOpen(false);
  };

  DisableScrollBarHandler(isOpen);

  const hoverClassName = isHovered ? "active" : undefined;

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (hoverRef.current && !hoverRef.current.contains(event.target)) {
        setIsHovered(false);
        setIsCalculatorOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hoverRef]);

  useEffect(() => {
    !isCalendlyOpen && handleClose();
  }, [isCalendlyOpen]);

  useEffect(() => {
    router.query.calculator === "open" && setIsOpen(true);
  }, []);

  return (
    <>
      <Styled.CalculatorPreviewCube className={hoverClassName}>
        <Styled.CalculatorPreview className={hoverClassName}>
          <Styled.CalculatorButton
            isCalculatorOpen={isCalculatorOpen}
            isChatOpen={isChatOpen}
            onClick={handleCloseChat}
            isHovered={isHovered}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            ref={hoverRef}
          >
            calculator
          </Styled.CalculatorButton>
          <Styled.CalculatorPreviewContentWrapper
            isChatOpen={isChatOpen}
            onClick={handleOpen}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className={hoverClassName}
          >
            <span>
              <SplitBrackets text={data?.previewTextMessage} />
            </span>
            <div>
              <BlackButtonComponent
                onClick={handleOpen}
                text="Start calculation"
                style={{ padding: "1em 2.15em" }}
              />
            </div>
          </Styled.CalculatorPreviewContentWrapper>
        </Styled.CalculatorPreview>
      </Styled.CalculatorPreviewCube>
      {isCompleted ? (
        <CalculatorCompletedPager
          finishClick={finishPagerClick}
          handlePagerLeftButtonClick={handleBackCompletePagerButtonsClick}
          handlePagerButtonsClick={handleCompletedPagerButtonsClick}
          handleClose={handleClose}
          handleButtonClick={handleClose}
          isCalendlyOpen={isCalendlyOpen}
        />
      ) : (
        <>
          {(isChosen &&
            initialValues &&
            blockchainSortedData &&
            classicSortedData && (
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={CalculatorValidation}
                validateOnChange
                validateOnBlur
              >
                {({ values }) => (
                  <CalculatorStepsComponent
                    isQuitting={isQuitting}
                    setIsQuitting={setIsQuitting}
                    step={step}
                    stepsCount={stepsData.length + 1}
                    setIsChosen={setIsChosen}
                    handleClose={handleClose}
                    setStep={setStep}
                    previousSteps={previousSteps}
                    setPreviousSteps={setPreviousSteps}
                    calculateIsClicked={calculateIsClicked}
                    setCalculateIsClicked={setCalculateIsClicked}
                    handleQuit={handleQuit}
                    warnIsShow={warnIsShow}
                    setWarnIsShow={setWarnIsShow}
                    isBlockchain={isBlockchain}
                    setIsCalendlyOpen={setIsCalendlyOpen}
                    setCalendlyUserData={setCalendlyUserData}
                  >
                    {stepsData.map((currentData, stepInd) => (
                      <div key={currentData.title}>
                        <CalculatorField
                          text={currentData.title}
                          disabled={values.questionsArr[stepInd].tieUpDisabled}
                          className="title"
                        />
                        {typeof currentData.options !== "string" && (
                          <CalculatorInputField
                            type={currentData.type}
                            subStep={currentData.subSteps}
                            stepInd={stepInd}
                            options={currentData.options}
                            disabled={
                              values.questionsArr[stepInd].tieUpDisabled
                            }
                            tieUpData={
                              currentData.tieUpSteps.length > 0 &&
                              typeof currentData.tieUpSteps[0].number ===
                                "number"
                                ? {
                                    number: currentData.tieUpSteps[0].number,
                                    relatedAnswer:
                                      values.questionsArr[
                                        currentData.tieUpSteps[0].number
                                      ].answer,
                                  }
                                : undefined
                            }
                            data={stepsData}
                          />
                        )}
                      </div>
                    ))}
                  </CalculatorStepsComponent>
                )}
              </Formik>
            )) || (
            <CalculatorPagerComponent
              isOpen={isOpen}
              handleBlockchainClick={handleBlockchainClick}
              handleButtonClick={handleButtonClick}
              handleClassicClick={handleClassicClick}
              handleClose={handleClose}
              buttonText={buttonText}
              startLoading={startLoading}
              classicStepsData={classicSortedData}
              blockchainStepsData={blockchainSortedData}
            />
          )}
        </>
      )}
    </>
  );
};

export default Calculator;

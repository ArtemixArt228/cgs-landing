import {
  FirstStepForm,
  SecondStepForm,
  ThirdStepForm,
} from "../components/contact-us-step";
import firstStepActive from "/public/ContactForm/first-step-active.svg";
import firstStep from "/public/ContactForm/first-step.svg";

import secondStepActive from "/public/ContactForm/second-step-active.svg";
import secondStep from "/public/ContactForm/second-step.svg";

import thirdStepActive from "/public/ContactForm/third-step-active.svg";
import thirdStep from "/public/ContactForm/third-step.svg";

interface IProps {
  block: "provideContactDetailsStep" | "bookCallStep" | "callDetailsStep";
  step: number;
  image: any;
  imageActive: any;
  component: (data: any) => JSX.Element;
}
export const modalContent: IProps[] = [
  {
    block: "provideContactDetailsStep",
    step: 0,
    image: firstStep,
    imageActive: firstStepActive,
    component: FirstStepForm,
  },
  {
    block: "bookCallStep",
    step: 1,
    image: secondStep,
    imageActive: secondStepActive,
    component: SecondStepForm,
  },
  {
    block: "callDetailsStep",
    step: 2,
    image: thirdStep,
    imageActive: thirdStepActive,
    component: ThirdStepForm,
  },
];

import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import {
  ICalculator,
  ICalculatorPostEmailResultsProps,
  ICalculatorPostLeadEmailResultsProps,
  ICalculatorStep,
} from "../../types/Admin/Response.types";
import { ICalculatorType } from "../../components/Admin/Calculator/CalculatorTypeInput";

export class AdminCalculatorService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getCalculatorData() {
    return this.httpService.get<ICalculator>("api/calculator");
  }

  public updateCalculatorData(data: ICalculator) {
    return this.httpService.put("api/calculator", data);
  }

  public addCalculatorType(data: ICalculatorType) {
    return this.httpService.post("api/calculator/type", data);
  }

  public getCalculatorClassicSteps() {
    return this.httpService.get<ICalculatorStep[]>(
      "api/calculator/classic/step"
    );
  }

  public updateCalculatorClassicStepById(data: ICalculatorStep) {
    return this.httpService.put(
      `api/calculator/classic/step/${data._id}`,
      data
    );
  }

  public sendResultsEmail(
    answers: ICalculatorPostEmailResultsProps
  ): Promise<void> {
    return this.httpService.post("api/calculator/mail", answers);
  }
  public sendResultsLeadEmail(
    answers: ICalculatorPostLeadEmailResultsProps
  ): Promise<void> {
    return this.httpService.post("api/calculator/lead-mail", answers);
  }

  public getCalculatorBlockchainSteps() {
    return this.httpService.get<ICalculatorStep[]>(
      "api/calculator/blockchain/step"
    );
  }

  public updateCalculatorBlockchainStepById(data: ICalculatorStep) {
    return this.httpService.put(
      `api/calculator/blockchain/step/${data._id}`,
      data
    );
  }
}

const factory = new HttpServiceFactory();
export const adminCalculatorService = new AdminCalculatorService(
  factory.createAuthHttpService()
);

import { IResponse } from "../../types/Admin";
import { HttpService } from "../http.service";
import { HttpServiceFactory } from "../index";

interface IData {
  // your interface
}

export class ExampleService {
  constructor(private httpService: HttpService) {}
  public examplePost(email: string, password: string) {
    return this.httpService.post<IResponse, IData>("example/post", {
      email,
      password,
    });
  }
}

const factory = new HttpServiceFactory();
export const exampleService = new ExampleService(factory.createHttpService());

//how to use in your component with react-query

// const addExampleMutation = useMutation(
//   ({email, password}: {email: string; password: string}) =>
//     exampleService.examplePost(email, password),
//   {
//     onSuccess: () => {
//       queryClient.invalidateQueries('get_data');
//     },
//   },
// );

//code services in a component folder

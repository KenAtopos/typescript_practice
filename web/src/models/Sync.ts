import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    if (data["id"]) {
      // put
      return axios.put(`${this.rootUrl}/${data["id"]}`, data);
    } else {
      // post
      return axios.post(this.rootUrl, data);
    }
  }
}

import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number; // optional interface property
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  // inheritance here
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  isAdminUser(): boolean {
    return this.get("id") === 1;
  }
}
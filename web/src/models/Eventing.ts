type Callback = () => void; // type alias

export class Eventing {
  event: { [key: string]: Callback[] } = {}; // [key: string] indicate that, event obj here can have any number of properties, but the key has to be the string, value needs to be the Callback type array

  on(eventName: string, callback: Callback): void {
    if (!this.event[eventName]) {
      this.event[eventName] = [];
    }

    this.event[eventName].push(callback);
  }

  trigger(eventName: string): void {
    if (this.event[eventName]) {
      this.event[eventName].forEach((c) => c());
    } else {
      return;
    }
  }
}

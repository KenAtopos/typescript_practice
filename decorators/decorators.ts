@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logErr("shit")
  pilot(@parameterDecorator speed: string): void {
    speed === "fast" ? console.log("slow down") : console.log("ok");
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string): void {
  console.log("Target:", target);
  console.log("Key:", key);
}

function logErr(errMsg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errMsg);
      }
    };
  };
}

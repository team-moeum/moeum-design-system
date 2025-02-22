import { BaseException } from "./BaseException";

export class ComponentException extends BaseException {
  constructor(message: string) {
    super(`Component Error: ${message}`);
    this.name = "ComponentException";
  }
}

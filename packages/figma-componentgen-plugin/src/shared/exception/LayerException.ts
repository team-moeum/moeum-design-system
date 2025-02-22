import { BaseException } from "./BaseException";

export class LayerException extends BaseException {
  constructor(message: string) {
    super(`Layer Error: ${message}`);
    this.name = "LayerException";
  }
}

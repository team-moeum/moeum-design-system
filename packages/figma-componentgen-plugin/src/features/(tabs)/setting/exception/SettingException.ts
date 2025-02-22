import { BaseException } from "@moeum/shared/exception/BaseException";

export class SettingException extends BaseException {
  constructor(message: string) {
    super(`Setting Error: ${message}`);
  }
}

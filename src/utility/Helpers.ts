export class UtilityHelpers {
  static isStringEmptyOrNull = (value: string): boolean => {
    return value === null || value === "";
  };

  static generateUniqueId = (): string =>
    Math.floor(Math.random() * 10).toString();
}

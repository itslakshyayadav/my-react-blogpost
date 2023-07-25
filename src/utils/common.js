function greet(fullName) {
  return `Hello! ${fullName}`;
}

function isNumber(property) {
  return typeof property === "number" ? "True" : "False";
}

export function isString(property) {
  return typeof property === "string" ? "True" : "False";
}

export const pi = 3.14;

export default {
  greet: greet,
  isNumber: isNumber,
  isString: isString,
};

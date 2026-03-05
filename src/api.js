export function fetchAPI(date) {
  let result = [];
  let random = Math.floor(Math.random() * 5) + 1;

  for (let i = 17; i <= 23; i++) {
    if (Math.random() < 0.5) {
      result.push(i + ":00");
    }
    if (Math.random() < 0.5) {
      result.push(i + ":30");
    }
  }

  return result;
}

export function submitAPI(formData) {
  return true;
}
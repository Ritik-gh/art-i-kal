export function getReadingTime(text) {
  let readingTime = Math.ceil(text.split(" ").length / 150);
  if (readingTime === 1) {
    return readingTime + " minute";
  } else {
    return readingTime + " minutes";
  }
}

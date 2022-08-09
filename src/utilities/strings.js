export function capitalize(str, delimiter) {
  return str.split(delimiter).map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(delimiter);
}
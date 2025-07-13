export function toCapitalizedName(slugText) {
  return slugText
    .replaceAll("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

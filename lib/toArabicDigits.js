// lib/toArabicDigits.js
export default function toArabicDigits(strOrNum) {
  return String(strOrNum).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
}

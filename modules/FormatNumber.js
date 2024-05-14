export default function (number) {
  return new Intl.NumberFormat('en').format(number);
}

export default function (dateString) {
  var parts = dateString.split('/');
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var day = parseInt(parts[2], 10);

  var months = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];

  var formattedDate = day + ' ' + months[month - 1] + ' ' + year;

  return formattedDate;
}

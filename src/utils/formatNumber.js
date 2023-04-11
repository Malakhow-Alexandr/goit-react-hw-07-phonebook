export const formatLittleNumber = number => {
  const formattedNumber = String(number).padStart(7, '0');
  const firstPart = formattedNumber.slice(0, 3);
  const secondPart = formattedNumber.slice(3, 5);
  const thirdPart = formattedNumber.slice(5);
  return `${firstPart}-${secondPart}-${thirdPart}`;
};

export const formatLargeNumber = number => {
  const digits = number.replace(/\D/g, '');

  if (digits.length !== 10) {
    return number;
  }

  const formattedNumber = digits.replace(
    /(\d{3})(\d{3})(\d{2})(\d{2})/,
    '$1-$2-$3-$4'
  );

  return formattedNumber;
};

export const formatNumber = number => {
  if (number.length === 7) {
    return formatLittleNumber(number);
  }
  if (number.length === 10) {
    return formatLargeNumber(number);
  }
  if (number.length < 7 || number.length > 10) {
    return number;
  }
  if (number.length >= 11) {
    console.log('please');
    return;
  }
  return number;
};

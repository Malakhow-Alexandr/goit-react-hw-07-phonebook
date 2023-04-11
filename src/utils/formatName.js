export const formatName = name => {
  const nameParts = name.split(' ');
  const formattedNameParts = nameParts.map(part => {
    const firstLetter = part.charAt(0).toUpperCase();
    const restLetters = part.slice(1).toLowerCase();
    return `${firstLetter}${restLetters}`;
  });
  return formattedNameParts.join(' ');
};

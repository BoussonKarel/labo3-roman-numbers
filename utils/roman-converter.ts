// @ts-nocheck
// We typen 'gewone' js en geen TypeScript
export const numbers = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

const generateRomanNumber = (number) => {
  let romanString = '',
    romanDetails =  {},
    arabic = number;

  for (const key in numbers) {
    const amount = Math.floor(arabic / numbers[key]);

    if (amount > 0) {
      romanString += key.repeat(amount)
      romanDetails[key] = amount;

      arabic -= amount * numbers[key];

      // Kleine optimalisatie
      // if (amount <= 0) {
      //   return [
      //     romanString,
      //     romanDetails
      //   ]
      // }
    }

  }

  return [
    romanString,
    romanDetails
  ]
}

export const getRomanNumber = (number: number) => {
  // TODO: functie die getal omzet naar romeinse cijfers
  // TODO: functie die getal ontleed en voor elk getal de romeinse cijfers toont
  if (number > 9999) {
    return {
      roman: 'Too big',
      details: null,
    }
  }

  // Array destructuring (zoals een useState-hook)
  const [roman, details] = generateRomanNumber(number)

  return {
    roman: roman,
    details: details,
  }
}

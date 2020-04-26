// abc -> Abc
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// ABC -> aBCc
const lowerFirst = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toLowerCase() + s.slice(1);
};

// ABC -> abc
const toUpper = (s) => {
  if (typeof s !== 'string') return ''
  return s.toUpperCase();
};

// ABC -> abc
const toLower = (s) => {
  if (typeof s !== 'string') return ''
  return s.toLowerCase();
};

// ersatzKonzept -> ersatz-konzept
const camelToKebab = (s) => {
  if (typeof s !== 'string') return ''
  return s
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase();
};

// ersatz-konzept -> ersatzKonzept
const kebabToCamel = (s) => {
  if (typeof s !== 'string') return ''
  return s.replace(/-([a-z0-9])/g, (g) => {
    return g[1].toUpperCase();
  });
};

// ersatz-konzept -> ErsatzKonzept
const kebabToPascal = (s) => {
  if (typeof s !== 'string') return ''
  return capitalize(kebabToCamel(s));
};

// ersatz-konzept -> ErsatzKonzept
const kebabToSnake = (s) => {
  if (typeof s !== 'string') return ''
  return s.replace(/-/g, '_');
};

// ? -> ersatz-konzept
const unknownToKebab = (s) => {
  return camelToKebab(kebabToCamel(s))
    .replace(/(\D+)(\d+)$/g, '$1-$2')
    .replace(/\s|_/g, '-');
};


exports.toKebab = unknownToKebab;
exports.unknownToKebab = unknownToKebab;
exports.kebabToCamel = kebabToCamel;
exports.kebabToPascal = kebabToPascal;
exports.kebabToSnake = kebabToSnake;
exports.capitalize = capitalize;
exports.lowerFirst = lowerFirst;
exports.toLower = toLower;
exports.toUpper = toUpper;


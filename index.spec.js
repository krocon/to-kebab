const {toLower} = require("./index");
const {toUpper} = require("./index");
const {toLowerCase} = require("./index");
const {lowerFirst} = require("./index");
const {capitalize} = require("./index");
const {kebabToCamel} = require("./index");
const {kebabToSnake} = require("./index");
const {kebabToPascal} = require("./index");
const {unknownToKebab} = require("./index");

const testValues = [
  ['ersatzKonzept', 'ersatz-konzept'],
  ['ErsatzKonzept', 'ersatz-konzept'],
  ['ersatz-Konzept', 'ersatz-konzept'],
  ['ersatz-konzept', 'ersatz-konzept'],
  ['ERSATZ-KONZEPT', 'ersatz-konzept'],
  ['ersatz_Konzept', 'ersatz-konzept'],
  ['ersatz_konzept', 'ersatz-konzept'],
  ['ERSATZ_KONZEPT', 'ersatz-konzept'],
  ['ersatz Konzept', 'ersatz-konzept'],

  ['ersatz-KonzeptDialog', 'ersatz-konzept-dialog'],
  ['ersatz_KonzeptDialog', 'ersatz-konzept-dialog'],

  ['ersatzKonzept12', 'ersatz-konzept-12'],
  ['ersatzKonzept-12', 'ersatz-konzept-12'],
  ['ERSATZ-KONZEPT12', 'ersatz-konzept-12'],
  ['ersatzKonzept12', 'ersatz-konzept-12'],
  ['ERSATZ_KONZEPT12', 'ersatz-konzept-12'],
];

test('unkownToKebab() should do the right thing', async () => {
  for (const testValue of testValues) {
    expect(unknownToKebab(testValue[0])).toBe(testValue[1]);
  }
})

test('kebabToCamel() should do the right thing', async () => {
  expect(kebabToCamel('ersatz-konzept-12')).toBe('ersatzKonzept12');
})

test('kebabToPascal() should do the right thing', async () => {
  expect(kebabToPascal('ersatz-konzept-12')).toBe('ErsatzKonzept12');
})

test('kebabToSnake() should do the right thing', async () => {
  expect(kebabToSnake('ersatz-konzept-12')).toBe('ersatz_konzept_12');
})

test('capitalize()', async () => {
  expect(capitalize('abc')).toBe('Abc');
})

test('lowerFirst()', async () => {
  expect(lowerFirst('ABC')).toBe('aBC');
})

test('toUpper()', async () => {
  expect(toUpper('abc')).toBe('ABC');
})

test('toLower()', async () => {
  expect(toLower('ABC')).toBe('abc');
})


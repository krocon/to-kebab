# to-kebab

Simple converter for strings.  
Converts any string to kebab case and kebab case to pascal case, camel case and snake case.
- kebab-case-2
- camelCase2
- snake_case_2
- PascalCase2
    

## Usage

```javascript
const {kebabToCamel} = require("to-kebab");
const {kebabToSnake} = require("to-kebab");
const {kebabToPascal} = require("to-kebab");
const {unknownToKebab} = require("to-kebab");

const kebab = unknownToKebab('ersatzKonzept12'); // => ersatz-konzept-12
kebabToPascal(kebab); // => ErsatzKonzept12
```

## Methods
- unknownToKebab(string): string
- kebabToCamel(string): string
- kebabToSnake(string): string
- kebabToPascal(string): string

| method        | input string   | output string  | output format |
|---------------|----------------|----------------|---------------|
| unkownToKebab | ersatzKonzept  | ersatz-konzept | kebab case    |
| unkownToKebab | ErsatzKonzept  | ersatz-konzept | kebab case    |
| unkownToKebab | ersatz-Konzept | ersatz-konzept | kebab case    |
| unkownToKebab | ersatz-konzept | ersatz-konzept | kebab case    |
| unkownToKebab | ERSATZ-KONZEPT | ersatz-konzept | kebab case    |
| unkownToKebab | ersatz_Konzept | ersatz-konzept | kebab case    |
| unkownToKebab | ersatz_konzept | ersatz-konzept | kebab case    |
| unkownToKebab | ERSATZ_KONZEPT | ersatz-konzept | kebab case    |
| unkownToKebab | ersatz Konzept | ersatz-konzept | kebab case    |
| unkownToKebab | ersatz-KonzeptDialog | ersatz-konzept-dialog | kebab case |
| unkownToKebab | ersatz_KonzeptDialog | ersatz-konzept-dialog | kebab case |
| unkownToKebab | ersatzKonzept12  | ersatz-konzept-12 | kebab case   |
| unkownToKebab | ersatzKonzept-12 | ersatz-konzept-12 | kebab case   |
| unkownToKebab | ERSATZ-KONZEPT12 | ersatz-konzept-12 | kebab case   |
| unkownToKebab | ersatzKonzept12  | ersatz-konzept-12 | kebab case   |
| unkownToKebab | ERSATZ_KONZEPT12 | ersatz-konzept-12 | kebab case   |
| kebabToCamel  | ersatz-konzept-12 | ersatzKonzept12  | camel case   |
| kebabToPascal | ersatz-konzept-12 | ErsatzKonzept12  | pascal case  |
| kebabToSnake  | ersatz-konzept-12 | ersatz_konzept_12 | snake case  |




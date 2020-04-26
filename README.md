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
const {toKebab} = require("to-kebab");

const kebab = toKebab('ersatzKonzept12'); // => ersatz-konzept-12
kebabToPascal(kebab); // => ErsatzKonzept12
kebabToSnake(kebab); // => ersatz_konzept_12
kebabToCamel(kebab); // => ersatzKonzept12
```

## Methods
- toKebab(string): string  same as unknownToKebab(string): string 
- kebabToCamel(string): string
- kebabToSnake(string): string
- kebabToPascal(string): string
- capitalize(string): string
- lowerFirst(string): string

| method        | input string   | output string  | output case |
|---------------|----------------|----------------|-------------|
| toKebab | ersatzKonzept  | ersatz-konzept | kebab       |
| toKebab | ErsatzKonzept  | ersatz-konzept | kebab       |
| toKebab | ersatz-Konzept | ersatz-konzept | kebab       |
| toKebab | ersatz-konzept | ersatz-konzept | kebab       |
| toKebab | ERSATZ-KONZEPT | ersatz-konzept | kebab       |
| toKebab | ersatz_Konzept | ersatz-konzept | kebab       |
| toKebab | ersatz_konzept | ersatz-konzept | kebab       |
| toKebab | ERSATZ_KONZEPT | ersatz-konzept | kebab       |
| toKebab | ersatz Konzept | ersatz-konzept | kebab       |
| toKebab | ersatz-KonzeptDialog | ersatz-konzept-dialog | kebab |
| toKebab | ersatz_KonzeptDialog | ersatz-konzept-dialog | kebab |
| toKebab | ersatzKonzept12  | ersatz-konzept-12 | kebab  |
| toKebab | ersatzKonzept-12 | ersatz-konzept-12 | kebab  |
| toKebab | ERSATZ-KONZEPT12 | ersatz-konzept-12 | kebab  |
| toKebab | ersatzKonzept12  | ersatz-konzept-12 | kebab  |
| toKebab | ERSATZ_KONZEPT12 | ersatz-konzept-12 | kebab  |
| kebabToCamel  | ersatz-konzept-12 | ersatzKonzept12  | camel  |
| kebabToPascal | ersatz-konzept-12 | ErsatzKonzept12  | pascal |
| kebabToSnake  | ersatz-konzept-12 | ersatz_konzept_12 | snake |
| kebabToSnake  | ersatz-konzept-12 | ersatz_konzept_12 | snake |
| capitalize  | abc | Abc |    |
| lowerFirst  | ABC | aBC |    |


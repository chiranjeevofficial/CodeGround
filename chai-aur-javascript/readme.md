# Hitesh Chaudhary - JavaScript

## Variable

### There are 4 ways to create variable in javascript.

> | Keyword | Description | Example |
> | --- | --- | --- |
> | const | Its store th econstant value. |  const x = 10; |
> | let | Its work as ordinary variable. | let y = 5; |
> | var | Its working same as let, but its have scope issue | var z = 12; |
> | ***withoutKeyword*** | Its wrong way to make variable in javascript. | k =15; |

* **Note:** Prefer not to use var because of issue in block scope and functional scope.

### Classification of Variable

> | keyword | Changes |
> | --- | --- |
> | const | false |
> | let | true |
> | var | true |
> | ***withoutKeyword*** | true |

print variable value syntax - 

Example Code
```
const accountId = 14335;
let accountEmail = "chiranjeev@google.com";
var accountPassword = "Hello@123";
accountCity = "Rishikesh";
let accountState;
```

for single value - 
```
console.log(accountId);
```

for multiple value - 
```
console.table(
    [
        accountId,
        accountEmail,
        accountPassword,
        accountCity,
        accountState
    ]
)
```

Output 

| (index) | Values |
| :---: | :---: |
| 0 | 14335 |
| 1 | 'chiranjeev@google.com' |
| 2 | 'Hello@123' |
| 3 | 'Rishikesh' | 
| 4 | undefined |

### DataType Conversion

 - **Number.isInteger():** its take a value as a argument and return boolean true or false repectively, value is Number or NotANumber.

 - **Number.isSafeInteger():** its work same as Number.isInteger() method, but its have predefined range (2^53 - 1) to (2^53 - 1);

### Value to Integer Conversion

- Before Conversion

| Value | Type | Integer |
| --- | --- | --- |
| "" | string | false |
| "5" | string | false |
| "5ab" | string | false |
| NaN | number | false |
| null | object | false |
| undefined | undefined | false |
| true | boolean | false |
| false | boolean | false |

 - After Conversion

| Value | Type | Integer |
| --- | --- | --- |
| 0 | number | true |
| 5 | number | true |
| NaN | number | false |
| NaN | number | false |
| 0 | number | false |
| NaN | number | false |
| 1 | number | true |
| 0 | number | true |

### value to Boolean Conversion

- Before Conversion

| Value | Type |
| --- | --- |
| "hello" | string |
| "" | string |
| 1 | number |
| false | number |

 - After Conversion

| Value | Type |
| --- | --- |
| true | boolean |
| false | boolean |
| true | boolean |
| false | boolean |

### value to String Conversion

- Before Conversion

| Value | Type |
| --- | --- |
| 1 | number |

 - After Conversion

| Value | Type |
| --- | --- |
| 1 | string |
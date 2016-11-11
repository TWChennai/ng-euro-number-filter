**ng-euro-number-filter:**

Angular filter to format the number in Euro.

**Usage:**

```
<span>{{ value | euroNumber }}</span>
<span>{{ value | euroNumber:decimalPlaces }}</span>```

Note: Default decimal places is same as input number's decimal place.

*Example:*

| Value  	      | In view(decimalPlaces not specified)   	  | decimalPlaces = 2 |
|---	          |---	                                      |----               |
|  1000 	      |  1.000 	                                  |  1.000,00         |
|  1,000 	      |  1.000 	                                  |  1.000,00         |
|  1,000.00 	  | 1.000,00  	                              |  1.000,00         |
|  100,000.00 	| 100.000,00  	                            |  100.000,00       |

# Band pass filter

## Stories

The company makes digital filters into Electronic music tracks for musicians. If a track or sound wave has frequencies lower than the minimum allowed those frequencies will be increased to the smallest one expected and if a track or sound wave has frequencies higher than the maximum allowed those frequencies will be decreased to the biggest one expected.

* 3 INPUTS: 
  - music track as array of integers (one or more frequencies)
  - lower bound (integer)  
  - upper bound (integer)

* 1 OUTPUT: music track as an array with modified frequencies if needed.

## Input/Output Table


|               INPUT                               |  OUTPUT               |
|   :--:                                | :--:                              |
[], lowerBound, higherBound               | [modified frequencies if needed  ] 
[30] 25, 45                         | [30]
[10] 25, 45                         | [25]
[50] 25, 45                         | [50]
[10, 30], 25, 45                    | [25, 30]
[10, 20, 30, 40, 50, 60], 25, 45    | [25, 25, 30, 40, 45, 45]
consider edge cases                 | !!!!!!!!!!




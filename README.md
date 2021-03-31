Digital audio plug

Apply filter on tracks, band pass filter.

3 inputs: music track as array of integers (single freq)/  lower baound  (integer)/ upper bound (integer)
output: array on same music track 

INPUT                               |  OUTPUT

[], lower,  higher                  | [ filter - freq. ] 
[30] 25, 45                         | [30]
[10] 25 , 45                        | [25]
[50] 25, 45                         | [50]
[10, 20, 30, 40, 50, 60], 25, 45    |  [25, 25, 30, 40, 45, 45]



## iif_then

Utility for rxjs that simulates the behavior for if and else. The iif operator is already present in the rxjs library but due to the way it is structured both input parameters: trueResult and falseResult, are executed. In some cases, this leads to cumbersome management of the two functions. This utility instead, only calls the function of interest, after evaluating the condition it takes as input

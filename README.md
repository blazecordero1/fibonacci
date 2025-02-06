
<h1>Fibonacci Sequence</h1>


---


Description:

  This project implements an API that generates the Fibonacci sequence using NestJS.

  Purpose: To create a API that calculates and returns the Fibonacci sequence up to a specified number.

Features:

  Accepts a parameter specify the number of terms.

  Returns the Fibonacci sequence in JSON format.

  Validates input to ensure it is a positive integer.

Tools/Technologies Used:

  NestJS

  TypeScript


---


Source Code:
      
      import { Controller, Get, Query } from '@nestjs/common';
      
      @Controller('fibonacci')
      export class FibonacciController {
        @Get()
        getFibonacci(@Query('n') n: number): number[] {
          const num = Number(n);
          if (isNaN(num) || num <= 0) {
            return [];
          }
      
          let sequence = [0, 1];
          for (let i = 2; i < num; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
          }
          return sequence.slice(0, num);
        }
      }
      



---


API Documentation:

Endpoint: http://localhost:3000/fibonacciMethod: GETParameters:

n (integer, required) - The number of Fibonacci terms to generate.

Response:
    
      {
        "status": 200,
        "message": "Success",
        "data": [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
      }

Example Request:

      GET http://localhost:3000/fibonacci?n=10

Example Response:
  
    {
      "status": 200,
      "message": "Success",
      "data": [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    }

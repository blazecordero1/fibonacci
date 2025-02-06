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

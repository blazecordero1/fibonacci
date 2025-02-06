import { Module } from '@nestjs/common';
import { FibonacciController } from './fibonacci/fibonacci.controller';

@Module({
  controllers: [FibonacciController],
})
export class AppModule {}

import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { log } from './log';
import { Module, RequestMethod } from '@nestjs/common';

@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        logger: log,
      },
      exclude: [{ method: RequestMethod.ALL, path: 'health' }],
    }),
  ],
  controllers: [],
  providers: [],
})
export class LogModule {}

import { Module } from '@nestjs/common';
import { JobApplicationsModule } from './app/job-applications/job-applications.module';

@Module({
  imports: [JobApplicationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

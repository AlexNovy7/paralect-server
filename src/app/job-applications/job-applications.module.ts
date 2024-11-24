import { Module } from '@nestjs/common';
import { JobApplicationsService } from './job-applications.service';
import { JobApplicationsController } from './job-applications.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JobApplicationsRepo } from 'src/domain/repos/job-applications-repo';

@Module({
  controllers: [JobApplicationsController],
  providers: [JobApplicationsService, PrismaService, JobApplicationsRepo],
  exports: [],
})
export class JobApplicationsModule {}

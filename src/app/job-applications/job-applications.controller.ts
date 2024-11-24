import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { JobApplicationsService } from './job-applications.service';
import { CreateJobApplicationDto } from 'src/domain/dtos/create-job-application.dto';

@Controller('job-applications')
export class JobApplicationsController {
  constructor(
    private readonly jobApplicationsService: JobApplicationsService,
  ) {}

  @Post('add')
  create(@Body() createJobApplicationDto: CreateJobApplicationDto) {
    return this.jobApplicationsService.create(createJobApplicationDto);
  }

  @Get()
  findAll() {
    return this.jobApplicationsService.findAll();
  }

  @Post('delete')
  remove(@Body() body: { ids: string | string[] }) {
    return this.jobApplicationsService.delete(body.ids);
  }

  @Post('change-status')
  async changeStatus(
    @Body()
    body: {
      ids: string | string[];
      status: string;
    },
  ) {
    return this.jobApplicationsService.updateStatus(body.ids, body.status);
  }
  @Post(':id/edit')
  async editJobApplication(
    @Param('id') id: string,
    @Body() editJobApplicationDto: CreateJobApplicationDto,
  ) {
    return this.jobApplicationsService.editJobApplication(
      id,
      editJobApplicationDto,
    );
  }
}

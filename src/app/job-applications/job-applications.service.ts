import { Injectable } from '@nestjs/common';

import { JobApplication } from '@prisma/client';
import { CreateJobApplicationDto } from 'src/domain/dtos/create-job-application.dto';
import { JobApplicationsRepo } from 'src/domain/repos/job-applications-repo';

@Injectable()
export class JobApplicationsService {
  constructor(private jobApplicationsRepo: JobApplicationsRepo) {}

  async create(jobApplication: CreateJobApplicationDto) {
    return this.jobApplicationsRepo.create(jobApplication);
  }

  async findAll() {
    return this.jobApplicationsRepo.findAll();
  }

  async findById(id: string) {
    return this.jobApplicationsRepo.findById(id);
  }

  async delete(ids: string | string[]) {
    if (Array.isArray(ids)) {
      return Promise.all(ids.map((id) => this.jobApplicationsRepo.delete(id)));
    } else {
      return this.jobApplicationsRepo.delete(ids);
    }
  }

  async updateStatus(ids: string | string[], status: string) {
    const updatePromises: Promise<JobApplication>[] = [];

    if (Array.isArray(ids)) {
      for (const id of ids) {
        updatePromises.push(this.jobApplicationsRepo.updateStatus(id, status));
      }
    } else {
      updatePromises.push(this.jobApplicationsRepo.updateStatus(ids, status));
    }

    return Promise.all(updatePromises);
  }
  async editJobApplication(
    id: string,
    editJobApplicationDto: CreateJobApplicationDto,
  ) {
    return this.jobApplicationsRepo.update(id, editJobApplicationDto);
  }
}

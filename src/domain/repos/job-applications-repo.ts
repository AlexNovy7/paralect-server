import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JobApplication } from '@prisma/client';

@Injectable()
export class JobApplicationsRepo {
  constructor(private readonly client: PrismaService) {}

  async findAll() {
    return this.client.jobApplication.findMany({});
  }

  async findById(id: string): Promise<JobApplication> {
    return this.client.jobApplication.findUnique({
      where: { id },
    });
  }

  async create(
    jobApplication: Pick<
      JobApplication,
      'company' | 'jobTitle' | 'salaryRange' | 'status' | 'note'
    >,
  ) {
    return this.client.jobApplication.create({
      data: jobApplication,
    });
  }

  async update(
    id: string,
    jobApplication: Partial<JobApplication>,
  ): Promise<JobApplication> {
    return this.client.jobApplication.update({
      where: { id },
      data: jobApplication,
    });
  }

  async delete(id: string): Promise<JobApplication> {
    return this.client.jobApplication.delete({
      where: { id },
    });
  }

  async updateStatus(id: string, status: string): Promise<JobApplication> {
    return this.client.jobApplication.update({
      where: { id },
      data: { status },
    });
  }
}

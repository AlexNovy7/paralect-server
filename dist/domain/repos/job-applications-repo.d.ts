import { PrismaService } from 'src/prisma/prisma.service';
import { JobApplication } from '@prisma/client';
export declare class JobApplicationsRepo {
    private readonly client;
    constructor(client: PrismaService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        company: string;
        jobTitle: string;
        salaryRange: string | null;
        status: string | null;
        note: string | null;
    }[]>;
    findById(id: string): Promise<JobApplication>;
    create(jobApplication: Pick<JobApplication, 'company' | 'jobTitle' | 'salaryRange' | 'status' | 'note'>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        company: string;
        jobTitle: string;
        salaryRange: string | null;
        status: string | null;
        note: string | null;
    }>;
    update(id: string, jobApplication: Partial<JobApplication>): Promise<JobApplication>;
    delete(id: string): Promise<JobApplication>;
    updateStatus(id: string, status: string): Promise<JobApplication>;
}

import { CreateJobApplicationDto } from 'src/domain/dtos/create-job-application.dto';
import { JobApplicationsRepo } from 'src/domain/repos/job-applications-repo';
export declare class JobApplicationsService {
    private jobApplicationsRepo;
    constructor(jobApplicationsRepo: JobApplicationsRepo);
    create(jobApplication: CreateJobApplicationDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        company: string;
        jobTitle: string;
        salaryRange: string | null;
        status: string | null;
        note: string | null;
    }>;
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
    findById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        company: string;
        jobTitle: string;
        salaryRange: string | null;
        status: string | null;
        note: string | null;
    }>;
    delete(ids: string | string[]): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        company: string;
        jobTitle: string;
        salaryRange: string | null;
        status: string | null;
        note: string | null;
    } | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        company: string;
        jobTitle: string;
        salaryRange: string | null;
        status: string | null;
        note: string | null;
    }[]>;
    updateStatus(ids: string | string[], status: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        company: string;
        jobTitle: string;
        salaryRange: string | null;
        status: string | null;
        note: string | null;
    }[]>;
    editJobApplication(id: string, editJobApplicationDto: CreateJobApplicationDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        company: string;
        jobTitle: string;
        salaryRange: string | null;
        status: string | null;
        note: string | null;
    }>;
}

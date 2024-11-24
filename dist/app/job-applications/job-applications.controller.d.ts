import { JobApplicationsService } from './job-applications.service';
import { CreateJobApplicationDto } from 'src/domain/dtos/create-job-application.dto';
export declare class JobApplicationsController {
    private readonly jobApplicationsService;
    constructor(jobApplicationsService: JobApplicationsService);
    create(createJobApplicationDto: CreateJobApplicationDto): Promise<{
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
    remove(body: {
        ids: string | string[];
    }): Promise<{
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
    changeStatus(body: {
        ids: string | string[];
        status: string;
    }): Promise<{
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

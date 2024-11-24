"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobApplicationsService = void 0;
const common_1 = require("@nestjs/common");
const job_applications_repo_1 = require("../../domain/repos/job-applications-repo");
let JobApplicationsService = class JobApplicationsService {
    constructor(jobApplicationsRepo) {
        this.jobApplicationsRepo = jobApplicationsRepo;
    }
    async create(jobApplication) {
        return this.jobApplicationsRepo.create(jobApplication);
    }
    async findAll() {
        return this.jobApplicationsRepo.findAll();
    }
    async findById(id) {
        return this.jobApplicationsRepo.findById(id);
    }
    async delete(ids) {
        if (Array.isArray(ids)) {
            return Promise.all(ids.map((id) => this.jobApplicationsRepo.delete(id)));
        }
        else {
            return this.jobApplicationsRepo.delete(ids);
        }
    }
    async updateStatus(ids, status) {
        const updatePromises = [];
        if (Array.isArray(ids)) {
            for (const id of ids) {
                updatePromises.push(this.jobApplicationsRepo.updateStatus(id, status));
            }
        }
        else {
            updatePromises.push(this.jobApplicationsRepo.updateStatus(ids, status));
        }
        return Promise.all(updatePromises);
    }
    async editJobApplication(id, editJobApplicationDto) {
        return this.jobApplicationsRepo.update(id, editJobApplicationDto);
    }
};
exports.JobApplicationsService = JobApplicationsService;
exports.JobApplicationsService = JobApplicationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [job_applications_repo_1.JobApplicationsRepo])
], JobApplicationsService);
//# sourceMappingURL=job-applications.service.js.map
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobApplicationsController = void 0;
const common_1 = require("@nestjs/common");
const job_applications_service_1 = require("./job-applications.service");
const create_job_application_dto_1 = require("../../domain/dtos/create-job-application.dto");
let JobApplicationsController = class JobApplicationsController {
    constructor(jobApplicationsService) {
        this.jobApplicationsService = jobApplicationsService;
    }
    create(createJobApplicationDto) {
        return this.jobApplicationsService.create(createJobApplicationDto);
    }
    findAll() {
        return this.jobApplicationsService.findAll();
    }
    remove(body) {
        return this.jobApplicationsService.delete(body.ids);
    }
    async changeStatus(body) {
        return this.jobApplicationsService.updateStatus(body.ids, body.status);
    }
    async editJobApplication(id, editJobApplicationDto) {
        return this.jobApplicationsService.editJobApplication(id, editJobApplicationDto);
    }
};
exports.JobApplicationsController = JobApplicationsController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_job_application_dto_1.CreateJobApplicationDto]),
    __metadata("design:returntype", void 0)
], JobApplicationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobApplicationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JobApplicationsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('change-status'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobApplicationsController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Post)(':id/edit'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_job_application_dto_1.CreateJobApplicationDto]),
    __metadata("design:returntype", Promise)
], JobApplicationsController.prototype, "editJobApplication", null);
exports.JobApplicationsController = JobApplicationsController = __decorate([
    (0, common_1.Controller)('job-applications'),
    __metadata("design:paramtypes", [job_applications_service_1.JobApplicationsService])
], JobApplicationsController);
//# sourceMappingURL=job-applications.controller.js.map
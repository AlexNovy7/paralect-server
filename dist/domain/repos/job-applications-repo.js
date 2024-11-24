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
exports.JobApplicationsRepo = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let JobApplicationsRepo = class JobApplicationsRepo {
    constructor(client) {
        this.client = client;
    }
    async findAll() {
        return this.client.jobApplication.findMany({});
    }
    async findById(id) {
        return this.client.jobApplication.findUnique({
            where: { id },
        });
    }
    async create(jobApplication) {
        return this.client.jobApplication.create({
            data: jobApplication,
        });
    }
    async update(id, jobApplication) {
        return this.client.jobApplication.update({
            where: { id },
            data: jobApplication,
        });
    }
    async delete(id) {
        return this.client.jobApplication.delete({
            where: { id },
        });
    }
    async updateStatus(id, status) {
        return this.client.jobApplication.update({
            where: { id },
            data: { status },
        });
    }
};
exports.JobApplicationsRepo = JobApplicationsRepo;
exports.JobApplicationsRepo = JobApplicationsRepo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JobApplicationsRepo);
//# sourceMappingURL=job-applications-repo.js.map
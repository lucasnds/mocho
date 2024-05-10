import { Module } from '@nestjs/common';
import { MembersModule } from './modules/members/members.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './modules/members/entities/member.entity';
import { CompaniesModule } from './modules/companies/companies.module';
import { Company } from './modules/companies/entities/company.entity';
import { ProjectsModule } from './modules/projects/projects.module';
import { Project } from './modules/projects/entities/project.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Member, Company, Project],
      synchronize: true,
    }),
    MembersModule,
    CompaniesModule,
    ProjectsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

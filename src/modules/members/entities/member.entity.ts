import { Company } from 'src/modules/companies/entities/company.entity';
import { BaseEntity } from 'src/modules/utils/entities/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { Skill } from 'src/modules/skills/entities/skill.entity';
import { Project } from 'src/modules/projects/entities/project.entity';

@Entity('members')
export class Member extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  document: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: number;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @OneToOne(() => Address, (address) => address.member)
  address: Address;

  @OneToMany(() => Skill, (skill) => skill.member, { cascade: true })
  skill: Skill[];
}

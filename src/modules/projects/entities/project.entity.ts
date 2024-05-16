import { Problem } from 'src/modules/problems/entities/problem.entity';
import { BaseEntity } from 'src/modules/utils/entities/base.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('projects')
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  objective: string;

  @OneToMany(() => Problem, (problem) => problem.project, { cascade: true })
  problem: Problem[];
}

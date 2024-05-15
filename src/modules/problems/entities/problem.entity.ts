import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('problems')
export class Problem {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}

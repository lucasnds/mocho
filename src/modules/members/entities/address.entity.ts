import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Member } from './member.entity';

@Entity('adresses')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  zipcode: string;

  @Column()
  streat: string;

  @Column()
  state: string;

  @Column()
  neighborhood: string;

  @Column()
  number: string;

  @OneToOne(() => Member)
  @JoinColumn()
  member: Member;
}

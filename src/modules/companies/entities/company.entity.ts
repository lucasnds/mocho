import { Member } from 'src/modules/members/entities/member.entity';
import { BaseEntity } from 'src/modules/utils/entities/base.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  document: string;

  @OneToMany(() => Member, (member) => member.company, { cascade: true })
  members: Member[];
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
}

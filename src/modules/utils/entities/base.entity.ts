import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class BaseEntity {
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at?: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at?: Date;

  @DeleteDateColumn()
  deleted_at?: Date;
}

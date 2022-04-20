import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 120 })
  public fullName: string;

  @Column()
  public province: string;

  @Column()
  public city: string;

  @Column()
  public country: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

  @ManyToOne(() => User, (user: User) => user.addresses)
  public user: User;
}

export default Address;

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
  NULL = 'null',
}

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  displayName: string;

  @Column()
  avatar: string;

  @Column()
  birth: Date;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.NULL,
  })
  gender: string;

  @Column()
  biography: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

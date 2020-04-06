import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Profile } from '../profile/profile.entity';

export enum AuthProvider {
  PASSWORD = 'PASSWORD',
  FACEBOOK = 'FACEBOOK',
  GITHUB = 'GITHUB',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, nullable: true })
  tel: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: AuthProvider,
    default: AuthProvider.PASSWORD,
  })
  provider: string;

  @OneToOne(type => Profile, { cascade: true })
  @JoinColumn()
  profile: Profile;

  // @OneToOne(type => Configuration)
  // @JoinColumn()
  // configuration: Configuration;
  configuration: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

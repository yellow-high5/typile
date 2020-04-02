import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum AuthProvider {
  PASSWORD = 'password',
  FACEBOOK = 'facebook',
  GITHUB = 'github',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  tel: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: AuthProvider,
    default: AuthProvider.PASSWORD,
  })
  provider: string;

  @Column()
  profile: string;

  @Column()
  configuration: string;

  @Column()
  notification: string;
}

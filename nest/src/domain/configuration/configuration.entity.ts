import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Configuration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 'JP' })
  country: string;

  @Column({ default: true })
  IsNotifyMessage: boolean;

  @Column({ default: true })
  IsShareActivity: boolean;

  @Column({ default: true })
  IsDisplaySearchEngine: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

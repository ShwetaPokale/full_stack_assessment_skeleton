import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { UserHomeDetails } from '../user_home/user_home.entity'; 

@Entity()
export class User {
  @PrimaryColumn()
  username: string;

  @Column()
  email: string;

  @OneToMany(() => UserHomeDetails, userHomeDetails => userHomeDetails.user)
  userHomeDetails: UserHomeDetails[];
}

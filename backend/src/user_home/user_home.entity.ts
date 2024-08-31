import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity'; 
import { Home } from '../home/home.entity';

@Entity()
export class UserHomeDetails {
  @PrimaryColumn()
  username: string;

  @PrimaryColumn()
  street_address: string;

  @ManyToOne(() => User, user => user.userHomeDetails)
  @JoinColumn({ name: 'username' })
  user: User;

  @ManyToOne(() => Home, home => home.userHomeDetails)
  @JoinColumn({ name: 'street_address' })
  home: Home;
}

import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { UserHomeDetails } from '../user_home/user_home.entity'; 


@Entity()
export class Home {
  @PrimaryColumn()
  street_address: string;

  @Column()
  state: string;

  @Column()
  zip: string;

  @Column('decimal', { precision: 10, scale: 2 })
  sqft: number;

  @Column('int')
  beds: number;

  @Column('int')
  baths: number;

  @Column('decimal', { precision: 10, scale: 2 })
  list_price: number;

  @OneToMany(() => UserHomeDetails, userHomeDetails => userHomeDetails.home)
  userHomeDetails: UserHomeDetails[];
}

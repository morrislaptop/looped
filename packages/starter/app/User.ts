import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}

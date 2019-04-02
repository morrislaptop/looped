import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm'

@Entity()
export class Photo extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;
}
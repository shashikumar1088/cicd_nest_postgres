import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    artist: string;

    @Column()
    duration: number;

    @Column()
    genre: string;

    @Column()
    album: string;
}

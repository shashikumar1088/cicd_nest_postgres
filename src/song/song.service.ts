import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entities/song.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song) private songRepository: Repository<Song>,
  ) { }
  async create(createSongDto: Song): Promise<Song> {
    return this.songRepository.save(createSongDto);
  }

  async findAll(): Promise<Song[]> {
    return this.songRepository.find();
  }
}

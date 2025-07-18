import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SongService } from './song.service';
import { Song } from './entities/song.entity';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) { }

  @Post()
  create(@Body() createSongDto: Song) {
    return this.songService.create(createSongDto);
  }

  @Get()
  findAll() {
    console.log('findAll called');
    return this.songService.findAll();
  }
}

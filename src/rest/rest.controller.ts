import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

import { RestService } from './rest.service';
import { Personaje } from '@prisma/client';

@Controller('peoples')
export class RestController {
  constructor(private readonly restService: RestService) {}

  @Get()
  obtenerPersonajes() {
    return this.restService.obtenerPersonajes();
  }

  @Post()
  loadData() {
    this.restService.obtenerPersonajes().then((data) => {
      data.forEach((item) => {
        const p: Personaje = {
          id: null,
          nombre: item.nombre,
          altura: item.altura,
          masa: item.masa,
          color_pelo: item.color_pelo,
          gender: item.genero,
          peliculas: item.peliculas.join(','),
        };

        this.restService.createPeople(p);
      });
    });
  }

  @Get('local')
  obtenerPersonajesLocal() {
    return this.restService.obtenerPersonajesLocal();
  }

  @Get('local/:id')
  obtenerPersonajesLocalById(@Param('id') id: string) {
    try {
      return this.restService.getPeopleLocalById(Number(id)); //
    } catch (err) {
      throw new NotFoundException('No se encontró');
    }
  }
}

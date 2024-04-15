import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Personaje } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { personajeMapper } from '../mappers/personaje.mapper';
import axios from 'axios';
import { ApiResponseList } from '../shared/interfaces/api-responses.interface';

@Injectable()
export class RestService {
  constructor(
    private httpService: HttpService,
    private prisma: PrismaService,
  ) {}

  private readonly apiUrl = 'https://swapi.py4e.com/api';

  obtenerPersonaje(id: number): Observable<any> {
    return this.httpService.get(`${this.apiUrl}/people/${id}`);
  }

  async obtenerPersonajes() {
    const response = await axios.get<ApiResponseList<Personaje>>(
      `${this.apiUrl}/people`,
    );
    return response.data.results.map((item) => {
      return personajeMapper(item);
    });
  }

  createPeople(data: Personaje): Promise<Personaje> {
    return this.prisma.personaje.create({
      data,
    });
  }

  async findPeople(id: number): Promise<Personaje> {
    return this.prisma.personaje.findUnique({
      where: {
        id: id,
      },
    });
  }

  obtenerPersonajesLocal(): Promise<Personaje[]> {
    return this.prisma.personaje.findMany();
  }

  getPeopleLocalById(id: number): Promise<Personaje> {
    return this.prisma.personaje.findUnique({
      where: {
        id: id,
      },
    });
  }
}

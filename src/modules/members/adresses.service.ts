import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdressesService {
  constructor(
    @InjectRepository(Address)
    private adressesRepository: Repository<Address>,
  ) {}

  async create(data: any) {
    return this.adressesRepository.save(data);
  }
}

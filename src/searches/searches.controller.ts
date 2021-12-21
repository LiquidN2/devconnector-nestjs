import { Controller, Get, Query } from '@nestjs/common';

import { SearchesService } from './searches.service';

@Controller('/api/searches')
export class SearchesController {
  constructor(private readonly searchesService: SearchesService) {}

  @Get('')
  async search(@Query('query') query: string) {
    const people = await this.searchesService.searchPeople(query);
    return { people };
  }
}

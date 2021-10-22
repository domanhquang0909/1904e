import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {SinhVien} from '../models';
import {SinhVienRepository} from '../repositories';

export class SinhVienControllerController {
  constructor(
    @repository(SinhVienRepository)
    public sinhVienRepository : SinhVienRepository,
  ) {}

  @post('/sinh-viens')
  @response(200, {
    description: 'SinhVien model instance',
    content: {'application/json': {schema: getModelSchemaRef(SinhVien)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SinhVien, {
            title: 'NewSinhVien',
            exclude: ['id'],
          }),
        },
      },
    })
    sinhVien: Omit<SinhVien, 'id'>,
  ): Promise<SinhVien> {
    return this.sinhVienRepository.create(sinhVien);
  }

  @get('/sinh-viens/count')
  @response(200, {
    description: 'SinhVien model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SinhVien) where?: Where<SinhVien>,
  ): Promise<Count> {
    return this.sinhVienRepository.count(where);
  }

  @get('/sinh-viens')
  @response(200, {
    description: 'Array of SinhVien model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SinhVien, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SinhVien) filter?: Filter<SinhVien>,
  ): Promise<SinhVien[]> {
    return this.sinhVienRepository.find(filter);
  }

  @patch('/sinh-viens')
  @response(200, {
    description: 'SinhVien PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SinhVien, {partial: true}),
        },
      },
    })
    sinhVien: SinhVien,
    @param.where(SinhVien) where?: Where<SinhVien>,
  ): Promise<Count> {
    return this.sinhVienRepository.updateAll(sinhVien, where);
  }

  @get('/sinh-viens/{id}')
  @response(200, {
    description: 'SinhVien model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SinhVien, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SinhVien, {exclude: 'where'}) filter?: FilterExcludingWhere<SinhVien>
  ): Promise<SinhVien> {
    return this.sinhVienRepository.findById(id, filter);
  }

  @patch('/sinh-viens/{id}')
  @response(204, {
    description: 'SinhVien PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SinhVien, {partial: true}),
        },
      },
    })
    sinhVien: SinhVien,
  ): Promise<void> {
    await this.sinhVienRepository.updateById(id, sinhVien);
  }

  @put('/sinh-viens/{id}')
  @response(204, {
    description: 'SinhVien PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() sinhVien: SinhVien,
  ): Promise<void> {
    await this.sinhVienRepository.replaceById(id, sinhVien);
  }

  @del('/sinh-viens/{id}')
  @response(204, {
    description: 'SinhVien DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.sinhVienRepository.deleteById(id);
  }
}

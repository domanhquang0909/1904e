import {Entity, model, property} from '@loopback/repository';

@model()
export class SinhVien extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  Hoten?: string;

  @property({
    type: 'date',
  })
  Ngaysinh?: string;

  @property({
    type: 'number',
  })
  GioiTinh?: number;

  @property({
    type: 'string',
  })
  DiaChi?: string;

  @property({
    type: 'string',
  })
  sdt?: string;

  @property({
    type: 'string',
  })
  email?: string;


  constructor(data?: Partial<SinhVien>) {
    super(data);
  }
}

export interface SinhVienRelations {
  // describe navigational properties here
}

export type SinhVienWithRelations = SinhVien & SinhVienRelations;

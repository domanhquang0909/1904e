import {Entity, model, property} from '@loopback/repository';

@model()
export class SinhVien extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  Hoten?: string;

  @property({
    type: 'date',
  })
  Ngaysinh?: string;

  @property({
    type: 'string',
  })
  GioiTinh?: string;

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

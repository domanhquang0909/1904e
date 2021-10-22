import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {QlsvDataSource} from '../datasources';
import {SinhVien, SinhVienRelations} from '../models';

export class SinhVienRepository extends DefaultCrudRepository<
  SinhVien,
  typeof SinhVien.prototype.id,
  SinhVienRelations
> {
  constructor(
    @inject('datasources.QLSV') dataSource: QlsvDataSource,
  ) {
    super(SinhVien, dataSource);
  }
}

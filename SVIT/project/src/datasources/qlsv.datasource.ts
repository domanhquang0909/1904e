import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

 const config = {
  name: 'QLSV',
  connector: 'mssql',
  url: 'mssql://sa:12345678@localhost/QLSV',
  host: 'localhost',
  port: 1433,
  user: 'sa',
  password: '1234578',
  database: 'QLSV'
};
// var config = {
//   "url":"mssql://sa:123456@localhost:1433/QLSV",
//   "user": 'sa',
//   "password": '123456',
//   "server": 'YANGYANG',
//   "connector": 'mssql',
//   "database": 'QLSV',
//   "port": 1433, 
//   // "dialect": "mssql",
//   // "dialectOptions": {
//   //     "instanceName": "SQLEXPRESS"
//   // }
// };

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class QlsvDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'QLSV';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.QLSV', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

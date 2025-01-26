import type { AbstractSqlDriver } from '@mikro-orm/mysql';
import { MySqlDriver } from '@mikro-orm/mysql';
import type { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { User } from './src/app/entity';
import { environment } from './src/app/environments/environment';
import { CLIHelper } from '@mikro-orm/cli';
import * as cli from '@mikro-orm/cli';
import { Migrator } from '@mikro-orm/migrations';

console.log('To avoid tree shaking...', CLIHelper.getNodeVersion());
console.log(cli);
const MIKRO_ORM_CONFIG: MikroOrmModuleOptions<AbstractSqlDriver> = {
  entities: [User],
  name: 'test',
  driver: MySqlDriver,
  port: 3306,
  forceUtcTimezone: true,
  dbName: environment.db.name,
  host: environment.db.host,
  user: environment.db.user,
  password: environment.db.password,
  discovery: { disableDynamicFileAccess: true },
  migrations: {
    tableName: 'migrations',
    path: './migrations'
  },
  allowGlobalContext: process.env.MIKRO_ORM_ALLOW_GLOBAL_CONTEXT === 'true',
  extensions: [Migrator]
};

export default MIKRO_ORM_CONFIG;

import { Migration } from '@mikro-orm/migrations';

export class Migration20250126040811 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`users\` (\`id\` int unsigned not null auto_increment primary key) default character set utf8mb4 engine = InnoDB;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`users\`;`);
  }

}

import { Entity, PrimaryKey } from '@mikro-orm/core';
import { Exclude, Expose } from 'class-transformer';

@Entity({ tableName: 'users' })
@Exclude()
export class User {
  @PrimaryKey()
  @Expose()
  id!: number;
}

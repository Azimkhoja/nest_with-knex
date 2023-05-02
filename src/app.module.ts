import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {KnexModule} from 'nest-knexjs'
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    KnexModule.forRoot({
      config: {
        client: 'postgres',
        useNullAsDefault: true,
        connection: {
          host: process.env.PG_HOST,
          port: Number(process.env.PG_PORT),
          user: process.env.PG_USERNAME,
          password: process.env.PG_PASSWORD,
          database: process.env.PG_DB,
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

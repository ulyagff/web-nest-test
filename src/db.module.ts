// import { Module } from '@nestjs/common';
// // import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { join } from 'path';
// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       port: 5432,
//       url: 'jdbc:postgresql://dpg-co05rru3e1ms73algmp0-a.oregon-postgres.render.com:5432/news_s7d3',
//       host: 'dpg-co05rru3e1ms73algmp0-a.oregon-postgres.render.com',
//       entities: [join(__dirname, '**', '*.entity.{ts,js}')],
//       synchronize: true,
//     }),
//   ],
// })
// // @Module({
// //   imports: [
// //     TypeOrmModule.forRootAsync({
// //       imports: [ConfigModule],
// //       inject: [ConfigService],
// //       useFactory: (configService: ConfigService) => ({
// //         type: 'postgres',
// //         port: configService.get('PORT'),
// //         url: configService.get('DATABASE_URL'),
// //         host: configService.get('HOST'),
// //         driver: configService.get('DRIVER'),
// //         // username: configService.get('POSTGRES_USER'),
// //         // password: configService.get('POSTGRES_PASSWORD'),
// //         // database: configService.get('POSTGRES_DB'),
// //         entities: [join(__dirname, '**', '*.entity.{ts,js}')],
// //         ssl: {
// //           rejectUnauthorized: false,
// //         },
// //         synchronize: true, //should be false at production!
// //       }),
// //     }),
// //   ],
// // })
// export class DatabaseModule {}

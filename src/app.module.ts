import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'madhu',
      database: 'FreshBasket',
      entities: [__dirname + '/**/*.entity.js'],
      synchronize: true, // Only for development
    }),
    AuthModule,
  ],
})
export class AppModule {}

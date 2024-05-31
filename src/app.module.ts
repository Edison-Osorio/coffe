import { Module } from '@nestjs/common';
import { PersistencesModule } from './modules/persistences/persistences.module';

@Module({
  imports: [PersistencesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

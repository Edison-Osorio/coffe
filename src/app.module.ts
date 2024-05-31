import { Module } from '@nestjs/common';
import { PersistencesModule } from './modules/persistences/persistences.module';
import { EmployeeModule } from './modules/employee/employee.module';

@Module({
  imports: [PersistencesModule, EmployeeModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

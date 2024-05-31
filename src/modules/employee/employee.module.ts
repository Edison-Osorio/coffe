import { Module } from '@nestjs/common';
import { EmployeeController } from './controller/employee.controller';
import { EmployeeService } from './service/employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, employeeSchema } from './schemas/employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: employeeSchema },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule { }

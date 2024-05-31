import { Injectable } from '@nestjs/common';
import { CrudModel } from 'src/models/Crud.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from '../schemas/employee.schema';
import { EmployeeDto } from '../dtos/employee.dto';

@Injectable()
export class EmployeeService extends CrudModel<Employee> {
  constructor(
    @InjectModel(Employee.name)
    protected readonly coffePickerModel: Model<Employee>,
  ) {
    super(coffePickerModel);
  }

  creteaEmployee(employee: EmployeeDto): Promise<EmployeeDto> {
    return this.create(employee);
  }
}

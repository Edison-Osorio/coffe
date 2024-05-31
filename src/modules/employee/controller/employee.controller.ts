import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeeService } from '../service/employee.service';
import { EmployeeDto } from '../dtos/employee.dto';

@Controller('api/v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.CREATED)
  createEmployee(@Body() employee: EmployeeDto) {
    return this.employeeService.creteaEmployee(employee);
  }
}

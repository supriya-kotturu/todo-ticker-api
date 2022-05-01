import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { Todo } from './todo.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Post()
  addTask(
    @Body('timer') timer: string,
    @Body('list') list: Todo[],
    @Body('status') status: 'expired' | 'running',
  ): string {
    const id = this.tasksService.addTask(timer, list, status);
    return id;
  }
}

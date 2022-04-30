import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  tasks: Task[] = [
    {
      id: 'erf',
      timer: '4556',
      list: [{ id: 'listID', title: 'list', status: 'pending' }],
      status: 'running',
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }
}

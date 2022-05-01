import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { Todo } from './todo.model';

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
    return [...this.tasks];
  }

  addTask(timer: string, list: Todo[], status: 'expired' | 'running'): string {
    const task = new Task('id', timer, list, status);
    this.tasks.push(task);
    return 'id';
  }

  getTask(id: string) {
    const targetTask = this.tasks.find((task) => task.id === id);
    if (!targetTask) {
      throw new NotFoundException(`Task not found with id : ${id}`);
    }
    return targetTask;
  }
}

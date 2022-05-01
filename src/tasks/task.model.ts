import { Todo } from './todo.model';
export class Task {
  constructor(
    public id: string,
    public timer: string,
    public list: Todo[],
    public status: 'running' | 'expired',
  ) {}
}

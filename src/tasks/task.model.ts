import { Todo } from 'src/interfaces';

export class Task {
  constructor(
    public id: string,
    public timer: string,
    public list: Todo[],
    public status: 'running' | 'expired',
  ) {}
}

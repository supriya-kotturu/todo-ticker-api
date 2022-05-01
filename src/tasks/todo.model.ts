export class Todo {
  constructor(
    public id: string,
    public title: string,
    public status: 'done' | 'pending' | 'expired',
  ) {}
}

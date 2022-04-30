export interface Todo {
  id: string;
  title: string;
  status: 'done' | 'pending' | 'expired';
}

import { Observable } from 'rxjs';

export interface User {
  name: string;
  picture: string;
}

export interface Contracts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contracts{
  time: number;
}

export abstract class UserData {
  abstract getUsers(): Observable<User[]>;
  abstract getContracts(): Observable<Contracts[]>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
}

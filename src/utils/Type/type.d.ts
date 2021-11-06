declare module 'module-types' {
  export interface IPeopleState {
    id: number;
    name: string;
    avatar: string;
  }

  export interface IDataState {
    todo: string;
    deadline: string;
    projectType: string;
  }
}

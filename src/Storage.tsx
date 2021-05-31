
const logKey = 'mylogData';

export class Work {
  private _startStamp: number = 0;
  private _endStamp: number = 0;

  constructor(){

  }
  get startStamp(): number{
    return this._startStamp;
  }

  set startStamp(value: number) {
    this._startStamp = value;
  }

  get endStamp(): number{
    return this._endStamp;
  }

  set endStamp(value: number) {
    this._endStamp = value;
  }

}


export class Works {
  private static instance: Works;

  static getInstance(): Works{
    if(!this.instance) {
      this.instance = new Works();
    }
    return this.instance;
  }
  private _works: Work[] = [];

  constructor(){
    if(logKey in localStorage) {
      this._works = JSON.parse(localStorage.getItem(logKey) as string) as Work[];
    }
  }

  get works(): Work[]{
    return this._works;
  }

  add(work:Work){
    this._works.push(work);
    localStorage.setItem(logKey, JSON.stringify(this._works));
  }
}


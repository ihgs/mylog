export default class Work {
  private _start: number = -1;
  private _end: number = -1; 
  private _comment: string = '';
  
  clone () {
    const obj = new Work();
    obj.start = this._start;
    obj.end = this._end;
    obj.comment = this._comment;
    return obj;
  }

  get start (){
    return this._start;
  }

  set start (_start) {
    this._start = _start;
  }

  get end () {
    return this._end;
  }

  set end(_end) {
    this._end = _end;
  }

  get comment () {
    return this._comment;
  }

  set comment (_comment) {
    this._comment = _comment;
  }
}
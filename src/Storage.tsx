import Work from './Work';
const worksKey = 'mylogDataWorks';
const currentKey = 'mylogDataCurrent';
export default class Storage {

  static getWorks(): Work[] {
    const works: Work[] = [];
    if(worksKey in localStorage) {
      JSON.parse(localStorage.getItem(worksKey) as string).forEach((obj: { _start: number; _end: number; _comment: string; })=>{
        const work = new Work();
        work.start = obj._start;
        work.end = obj._end;
        work.comment = obj._comment;
        works.push(work);
      });
    }
    return works;
  }

  static saveWorks(works:Work[]){
    localStorage.setItem(worksKey, JSON.stringify(works));
  }

  static getCurrent(): Work {
    const current = new Work();
    if(currentKey in localStorage) {
      const obj = JSON.parse(localStorage.getItem(currentKey) as string);
      current.start = obj._start;
      current.comment = obj._comment;
    }
    return current;
  }

  static saveCurrent(current:Work){
    localStorage.setItem(currentKey,  JSON.stringify(current));
  }

  static clearCurrent() {
    localStorage.removeItem(currentKey);
  }
  
  static clear(){
    localStorage.removeItem(worksKey);
    localStorage.removeItem(currentKey);
  }
}



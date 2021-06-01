import Work from './Work';
const worksKey = 'mylogDataWorks';

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

  static clear(){
    localStorage.removeItem(worksKey);
  }
}



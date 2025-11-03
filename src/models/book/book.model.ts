import { getObject } from '@bjanderson/utils';
import { UsfmObject } from '../usfm-object';

export class Book {
  usfm: UsfmObject;

  constructor(o?: Partial<Book>) {
    const obj: Book = getObject(o);
    this.usfm = new UsfmObject(obj.usfm);
  }
}

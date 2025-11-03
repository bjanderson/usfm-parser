import { getObject } from '@bjanderson/utils';
import { UsfmObject } from '../usfm-object';

export class Chapter {
  usfm: UsfmObject;

  constructor(o?: Partial<Chapter>) {
    const obj: Chapter = getObject(o);
    this.usfm = new UsfmObject(obj.usfm);
  }
}

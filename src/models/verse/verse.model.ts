import { getObject } from '@bjanderson/utils';
import { UsfmObject } from '../usfm-object';

export class Verse {
  usfm: UsfmObject;

  constructor(o?: Partial<Verse>) {
    const obj: Verse = getObject(o);
    this.usfm = new UsfmObject(obj.usfm);
  }
}

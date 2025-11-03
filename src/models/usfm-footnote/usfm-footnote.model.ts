import { getObject, getString } from '@bjanderson/utils';

export class UsfmFootnote {
   id: string;

  constructor(o?: Partial<UsfmFootnote>) {
    const obj: UsfmFootnote = getObject(o);
    this.id = getString(obj.id, null);
  }
}

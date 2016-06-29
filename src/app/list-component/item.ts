export class Item {
  constructor(
    public id: number,
    public name: string,
    public short: string,
    public citation: Htmly,
    public note: Htmly) { }
}

export class Htmly {
  constructor(public html: string) { }
}

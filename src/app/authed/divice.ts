export class Attributes {
    name = '';
    battery = 0;
    status = '';
    description = '';
    velocity = 0;

    public constructor() { }
}

export class Divice {
    public id = '';
    private attributes: Attributes;
    private type = 'divice';

    public constructor(id: string) {
        this.id = id;
        this.attributes = new Attributes();
    }

    public new(id: string): this {
        this.id = id;
        this.attributes = new Attributes();

        return this;
    }

    public setAttributes(attributes: Attributes): this {
        this.attributes = attributes;

        return this;
    }
}

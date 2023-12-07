type Size = ''|'S'|'M'|'XL';

class  Product {
    constructor(
        public name: string,
        public price: number,
        public size:Size = ""
    ){
    }

    isProductReady(): boolean {
        for (const key in this ){
            switch(typeof this[key] ){
                case 'string':
                    if( (<string><unknown>this[key]).length <= 0) throw new Error(`${key} is empty`);
                break;
                case "number":
                    if( (<number>this[key] <= 0) ) throw new Error(`${key} is zero`);
                break;
                default:
                    throw new Error(`${typeof this[key]} is not supported`)

            }
        }

        return true;    
    }

    toString(){
        /* 
        if(this.name.length <= 0) throw new Error('name is empty');
        if(this.price <= 0) throw new Error('price is empty');
        if(this.size.length == 0) throw new Error('Size is empty');
        */
        if( !this.isProductReady()) return;
        return `${this.name}  ${this.price} ${this.size}`;
    }
}


(function(){
    
    const bluePants = new Product('blue pants',200, 'S');
    console.log(bluePants.toString());
})()

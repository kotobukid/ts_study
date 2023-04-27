function sayHello(): void;
function sayHello(greet: string): void;
function sayHello(greet: string, to: string): void;
function sayHello(greet?: string, to?: string): void {
    greet = greet || 'hello';
    to = to || '';
    console.log(`${greet} ${to}`);
}


export {sayHello};
import {sayHello} from "./func/overloads.js";
import type {Point2D} from "my-types/types";

sayHello();
sayHello('HELLO')
sayHello('HELLO', 'Taro');

const p: Point2D = {
    x: 0,
    y: 0
};
console.log({p});
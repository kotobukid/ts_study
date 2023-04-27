type Point2D = {
    x: number,
    y: number
}

type Circle = {
    r: number,
    stroke?: string,
    fill?: string
}

type WithId<T> = T & {
    id: string
}

export {Point2D, Circle, WithId}
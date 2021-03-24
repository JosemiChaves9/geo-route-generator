interface coordinates {
    lat: number;
    lng: number;
}
export declare function generateRoute(actualPos: coordinates, finalPos: coordinates, steps: number): {
    lat: number;
    lng: number;
}[];
export {};

export interface Destination {
    _id: string, // Internal priary key in MongoDB
    destinationId: number,
    name: string,
    description: string,
    image: string,
    
}
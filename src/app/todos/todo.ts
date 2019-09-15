export class TodoItem {
    constructor(public title: string, public text: string, public id: string = Guid.newGuid()) {
        
    }
}
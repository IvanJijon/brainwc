export interface Item {
    title: String,
    subtitle: String,
    description: String
}

export class ListItem implements Item {

    title: String
    subtitle: String
    description: String

    constructor(title: String) {
        this.title = title
        this.subtitle = ""
        this.description = ""
    }
}

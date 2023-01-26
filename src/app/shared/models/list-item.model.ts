export interface Item {
    title: string,
    subtitle: string,
    description: string
}

export class ListItem implements Item {

    title: string
    subtitle: string
    description: string

    constructor(title: string) {
        this.title = title
        this.subtitle = ""
        this.description = ""
    }
}

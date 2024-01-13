export function getImageUrl(person: Person, size = 's') {
    return (
        `https://i.imgur.com/${person.imageId}${size}.jpg`
    )
}
type Person = {
    name: string
    imageId: string
}

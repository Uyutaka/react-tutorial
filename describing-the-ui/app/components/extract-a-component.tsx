// https://react.dev/learn/passing-props-to-a-component
// challenge 1

function getImageUrl(id: string): string {
    return (
        `https://i.imgur.com/${id}s.jpg`
    )
}
type Person = {
    name: string
    imageId: string
    profession: string
    awards: string[]
    discovered: string
}
const Profile: FC<{ person: Person, size: number }> = ({ person, size }) => {
    return (
        <>
            <section className="profile">
                <h2>{person.name}</h2>
                <Avatar size={size} person={{ name: person.name, imageId: person.imageId }} />
                {/* <Profile size={70} person={{ name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG' }} /> */}
                <ul>
                    <li>
                        <b>Profession: </b>
                        {person.profession}
                    </li>
                    <li>
                        <b>Awards: {person.awards.length} </b>
                        {person.awards.join(', ')}
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {person.discovered}
                    </li>
                </ul>
            </section>


        </>
    )
}

const Avatar: FC<{ person: Person, size: number }> = ({ person, size }) => {
    return (<>
        <img
            className="avatar"
            src={getImageUrl(person.imageId)}
            alt={person.name}
            width={size}
            height={size}
        />
    </>
    )
}
export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            {/* <section className="profile"> */}
            {/* <h2>Maria Skłodowska-Curie</h2> */}
            <Profile size={70} person={{
                name: 'Maria Skłodowska-Curie',
                imageId: 'szV5sdG',
                profession: 'physicist and chemist',
                awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
                discovered: 'polonium (chemical element)'
            }} />


            <Profile size={70} person={{
                name: 'Katsuko Saruhashi',
                imageId: 'YfeOqp2',
                profession: 'geochemist',
                awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
                discovered: 'a method for measuring carbon dioxide in seawater'
            }} />

        </div>
    );
}

// https://react.dev/learn/passing-props-to-a-component
import React, { FC, ReactNode } from "react";

type Person = {
    name: string
    imageId: string
}
export default function Profile() {
    return (
        <>
            <Card>
                <Avatar
                    // size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2'
                    }}
                />
            </Card>
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </>
    )
}
function getImageUrl(person: Person): string {
    return (
        `https://i.imgur.com/${person.imageId}s.jpg`
    )
}
const Card: FC<ReactNode> = props => {
    return (
        <div className="card" style={{ backgroundColor: 'red' }}>
            {props.children}
        </div>
    )
}

const Avatar: FC<{ person: Person, size: number }> = ({ person, size = 100 }) => {
    return (<>
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    </>
    )
}

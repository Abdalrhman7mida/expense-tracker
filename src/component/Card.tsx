import './Card.css'

interface CardProps {
    className: string;
    children: React.ReactNode;
}
export default function Card(props: CardProps) {
    const classes = `card ${props.className}`;

    return <div className={classes}>{props.children}</div>
}
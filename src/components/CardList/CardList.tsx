import type { ICard } from "../../services/CardSlice"
import CardItem from "../CardItem/CardItem"
import styles from './CardList.module.css'

interface ICardListProps {
    cards: ICard[]
}

const CardList = (props: ICardListProps) => {
    
    return (
        <section className={styles['card-list']}>
            {props.cards.map((item )=> (
                <CardItem key={item.id} card={item}/>
            ))}
        </section>
    )
}

export default CardList

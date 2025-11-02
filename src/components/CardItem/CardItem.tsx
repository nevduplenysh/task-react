import { useNavigate } from "react-router-dom"
import { removeCard, togglelike, type ICard } from "../../services/CardSlice"
import { useDispatch } from "../../services/Store"
import heartLike  from '../../images/heartLike.svg'
import heartBlack  from '../../images/heartBlack.svg'
import trash from '../../images/trash.svg'
import styles from "./CardItem.module.css"

export interface ICardItemProps {
    card: ICard
}

const CardItem = ({card}: ICardItemProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClickCard = () => {
        navigate(`/products/${card.id}`) 
    }

    const handleClickLike = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        dispatch(togglelike(card.id))
    }

    const handleClickDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        dispatch(removeCard(card.id))
    }

    return (
        <div className={styles.card} onClick={handleClickCard}>
            <div className={styles['card-container-img']}>
                <img
                    src={card.image}
                    alt={card.name}
                    className={styles.img}
                />
            </div>
            <div className={styles['card-container-text']}>
                <h3>{card.name}</h3>

            </div>
            <div className={styles['button-container']}>
                <button 
                    onClick={handleClickLike} 
                    style={{ background: 'none', border: 'none' }}
                    >
                        <img 
                            src={card.isLiked ? heartLike : heartBlack} 
                            alt="like" 
                            style={{ width: '40px', height: '40px' }}
                    />
                </button>
                <button 
                    onClick={handleClickDelete}
                    style={{ background: 'none', border: 'none' }}>
                    <img 
                            src={trash} 
                            alt="корзина" 
                            style={{ width: '40px', height: '40px' }}
                    />
                </button>
            </div>
        </div>
    )
}

export default CardItem
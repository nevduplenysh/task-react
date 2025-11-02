import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "../services/Store"
import { fetchCards, selectCards, selectError, selectLikeCard, selectLoading } from "../services/CardSlice"
import CardList from "../components/CardList/CardList"
import Button from "../components/Button/Button"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header/Header"

type TFilter = 'all' | 'likes'

const Products = () => {
    const cards = useSelector(selectCards)
    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)
    const likeCards = useSelector(selectLikeCard)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ filter, setFilter ] = useState<TFilter>('all')
    const displayedCards = filter === 'all' ? cards : likeCards

    useEffect(() => {
        if (cards.length === 0) { 
            dispatch(fetchCards())
        }
    }, [dispatch, cards.length])

    return (
        <>
            <Header/>
            <main style={{
                padding: '20px 0'
            }}>
                <section style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingBottom: '30px'
                }}>
                    <Button onClick={() => navigate('/create-product')}>создать карточку</Button>
                    <Button onClick={() => setFilter('all')}>все карточки</Button>
                    <Button onClick={() => setFilter('likes')}>избранное</Button>  
                </section>

                {loading && <div>LOADING</div>}
                {error && <p className="error">Ошибка: {error}</p>}
                {!loading && !error && (
                    <>
                        {filter === 'likes' && likeCards.length === 0 ? (
                            <p 
                                style={{ 
                                    textAlign: 'center',
                                    fontSize: '28px'
                                }}>Добавьте карточки в избранное 
                            </p> 
                        ) : (
                                <CardList cards={displayedCards}/>
                        )}
                    </>
                    )}
            </main>
        </>
    )
}

export default Products

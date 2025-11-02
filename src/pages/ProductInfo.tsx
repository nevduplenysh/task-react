import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "../services/Store";
import { selectCards } from "../services/CardSlice";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";

const ProductInfo = () => {
    const { id } = useParams()
    const cards = useSelector(selectCards);
    const card = cards.find(item => item.id === Number(id));
    const navigate = useNavigate()
    return (
        <>
            <Header/>
            <main style={{
                padding: '20px 0'
            }}>
                <h2>Подробная информация</h2>
                <div >
                    <div>
                        <img 
                        src={card?.image}
                        alt={card?.name}
                    />
                    </div>
                    <div style={{
                        paddingTop: '30px'
                    }}>
                        <h3>{card?.name}</h3>
                        <div>
                            <p><strong>Пол:</strong> {card?.gender}</p>
                            <p><strong>Вид:</strong> {card?.species}</p>
                        </div>
                    </div>
                </div>    
                <Button onClick={() => navigate('/products')}>вернуться</Button>   
            </main>
        
        </>

    )
}

export default ProductInfo
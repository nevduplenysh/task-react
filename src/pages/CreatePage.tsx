import { useNavigate } from "react-router-dom"
import Form from "../components/Form/Form"
import Header from "../components/Header/Header"
import Button from "../components/Button/Button"


const CreatePage = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header/>
            <main style={{
                padding: '20px 0'
            }}>
                <div>
                    <h2>Создание нового персонажа</h2>
                    <Form/>
                </div>

                <div>
                    <Button onClick={() => navigate('/products')}>
                        Вернуться
                    </Button>
                </div>
            </main>
            
        </>
    )
}

export default CreatePage
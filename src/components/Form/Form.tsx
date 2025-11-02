import { useNavigate } from "react-router-dom"
import { useDispatch } from "../../services/Store"
import { useState } from "react"
import { addCard, type ICard } from "../../services/CardSlice"
import styles from './Form.module.css'

export const SPECIES_OPTIONS = [
    'Human', 'Alien', 'Unknown'
] 

export const GENDER_OPTIONS = [
    'Female', 'Male', 'Genderless', 'Unknown'
] 

const Form = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: '',
        image: '',
        species: SPECIES_OPTIONS[0],
        gender: GENDER_OPTIONS[0]
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        console.log(value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const newId = Date.now(); 

        const newCard: ICard = {
            id: newId,
            name: formData.name,
            image: formData.image,
            species: formData.species,
            gender: formData.gender,
            isLiked: false
        }
        console.log('Новая карточка:', newCard);

        dispatch(addCard(newCard))
        console.log('Карточка отправлена в Redux');

        navigate('/products');
    }

    const isFormValid = formData.name.trim() !== '' && formData.image.trim() !== ''
    
    return(
        <form  onSubmit={handleSubmit} className={styles.form}>
            <div className={styles['form-group']}>
                <label htmlFor="name"></label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите имя"
                    className={styles.input}
                />
            </div>
        
            <div className={styles['form-group']}>
                <label htmlFor="image"></label>
                <input 
                    type='url'
                    id='image'
                    name='image'
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    className={styles.input}
                />
            </div>
        
            <div className={styles['form-group']}>
                <label htmlFor="species"></label>
                <select
                    id='species'
                    name='species'
                    value={formData.species}
                    onChange={handleChange}
                    className={styles.select}
                >
                    {SPECIES_OPTIONS.map(item => (
                        <option key={item} value={item} >
                            {item}
                        </option>
                    ))}   
                </select>
           </div>
        
            <div className={styles['form-group']}>
                <select
                    id='gender'
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}
                    className={styles.select}
                >
                    {GENDER_OPTIONS.map(item => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            
            <button 
                type="submit" 
                disabled={!isFormValid} 
                style={{
                    color: isFormValid ? 'black' : 'grey',
                    width: '190px',
                    height: '40px',
                    fontSize: '16px',
                    fontWeight: '500',
                    background: isFormValid ? '#B7E9A0' : 'none',
                }}>
                Создать персонажа
            </button>
        </form>
    )
}

export default Form
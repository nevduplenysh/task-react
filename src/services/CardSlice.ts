import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface ICard  {
    id: number,
    name: string,
    image: string,
    species: string,
    gender: string,
    isLiked?: boolean
}

export interface ICardState {
    cards: ICard[];
    loading: boolean;
    error: string | null;
}

const initialState: ICardState = {
    cards: [],
    loading: false,
    error: null
}

export const fetchCards = createAsyncThunk<ICard[]>(
    'cards/fetchCards',
    async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        return data.results;
    }
)

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<ICard>) => {
            state.cards.push(action.payload);
        }, 
        removeCard: (state, action: PayloadAction<number>) => {
            state.cards = state.cards.filter(item => item.id !== action.payload);
            },
        togglelike: (state, action: PayloadAction<number>) => {
            const card = state.cards.find(card => card.id === action.payload)
            if (card)
                card.isLiked = !card.isLiked
        }
    },
    selectors: {
        selectCards: (state) => state.cards,
        selectError: (state) => state.error,
        selectLoading: (state) => state.loading,
        selectLikeCard: (state) => state.cards.filter(card => card.isLiked)

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error';
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.loading = false;
                state.cards = action.payload.map(item => ({
                    ...item,
                    isLiked: false
                }))
            })  
    }
})

export const { addCard, removeCard, togglelike } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
export const { selectCards, selectError, selectLoading, selectLikeCard } = cardSlice.selectors;

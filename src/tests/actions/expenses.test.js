import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'my note', description: 'rent', amount: 100 })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: 'my note', description: 'rent', amount: 100 }
    })
})

test('should setup add expense action object with provided values', () => {
    const expneseData = {
        description: 'Rent',
        amount: 195000,
        createdAt: 1000,
        note: 'This was the last months rent'
    }
    const action = addExpense(expneseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            ...expneseData,
            id: expect.any(String)
        }

    })
})

test('should setup add expense action object with deafult values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expenses: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }

    })
})
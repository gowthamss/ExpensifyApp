import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, filtersWithData } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach({
    setTextFilter = jest.fn(),
    sortByDate = jest.fn(),
    sortByAmount = jest.fn(),
    setStartDate = jest.fn(),
    setEndDate = jest.fn(),
    wrapper = shallow(<ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
})


test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with data correctly', () => {
    wrapper.setProps({
        filters: filtersWithData
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const text = 'rent'
    wrapper.find('input').simulate('change', {
        target: { text }
    })
    expect(wrapper).toHaveBeenLastCalledWith(text)  
})

test('should sort by date', () => {
    const sortBy = 'date'
    wrapper.setProps({
        filters: filtersWithData
    })

    wrapper.find('select').simulate('change', {
        target: { sortBy }
    })
    expect(sortByDate).toHaveBeenLastCalledWith()
})

test('should sort by amount', () => {
    const sortBy = 'amount'
    wrapper.find('select').simulate('change', {
        target: { sortBy }
    })
    expect(sortByAmount).toHaveBeenLastCalledWith()
})

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus change', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFoucsChange') ({ calendarFocused })
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})
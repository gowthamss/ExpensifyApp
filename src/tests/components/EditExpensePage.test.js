import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";
import { editExpense, removeExpense } from "../../actions/expenses";

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            removeExpense={removeExpense}
            expense={expenses[0]}
            history={history}
        />
    );
});

test("should render Edit Expense Page", () => {
    expect(wrapper).toMatchSnapShot();
});

test("should handle editExpense onSubmit", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test("should render removeExpense onClick", () => {
    wrapper.find("button").simulate("click");
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[0].id,
    });
});

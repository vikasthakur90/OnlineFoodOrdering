import { fireEvent, render,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";

it("Should render the Header component",() =>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
        <Header />
    </Provider>
    </BrowserRouter>);
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});

it("Should render the cart as size 0",() =>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
        <Header />
    </Provider>
    </BrowserRouter>);
    const cart = screen.getByText("Cart-(0 items)");
    expect(cart).toBeInTheDocument();
});

it("Should check wheather login button is converted to logout after a click",() =>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
        <Header />
    </Provider>
    </BrowserRouter>);
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    const logoutButton = screen.getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
});
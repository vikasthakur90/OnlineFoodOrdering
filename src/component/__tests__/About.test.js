import About from "../About";
import "@testing-library/jest-dom"
import { screen,render } from "@testing-library/react";

it("Should render the about page",()=>{
    render(<About />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})
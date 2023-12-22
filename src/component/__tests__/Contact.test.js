import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us Page test Caese",()=>{
    test("Contact page should be rendered",()=>{
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Contact page Check for button",()=>{
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("Contact page Check for Submit",()=>{
        render(<Contact />);
        const Submit = screen.getByText("Submit");
        expect(Submit).toBeInTheDocument();
    });
    
})
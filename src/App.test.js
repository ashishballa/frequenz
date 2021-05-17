import { render, screen } from '@testing-library/react';
import App from './App';
import getWordFrequency from "./utils/frequency"

test('NavBar is rendered', () => {
    render( < App / > );
    const linkElement = screen.getByText("Frequenz")
    expect(linkElement).toBeInTheDocument();
});

test('Input form is rendered', () => {
    render( < App / > );
    const linkElement = screen.getByPlaceholderText("Enter N value")
    const buttonElement = screen.getByText("Search for top N")
    expect(linkElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
});

test('Frequency function is working', async() => {
    var res = await getWordFrequency(2)
    expect(res.toString()).toBe([
        ["and", 10],
        ["the", 9]
    ].toString())
});

test('Footer is rendered', () => {
    render( < App / > );
    const linkElement = screen.getByText("ASHISH BALLA")
    expect(linkElement).toBeInTheDocument();
});
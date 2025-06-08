import { describe, it, expect } from "vitest";
import { getAllByRole, render, screen } from "@testing-library/react";
import { Tutorial } from "../components/presentacion/Tutorial";
import { Form } from "react-router-dom";


describe('NewHotel component',() => {
    
    it('Revisar etiquetas h5 en el tutorial', () => {
        render(<Tutorial />);
        screen.getByText('Visual Manager');
        const h5 = screen.getAllByRole('heading');
        expect(h5.length).toBeGreaterThan(0); 
    });
});
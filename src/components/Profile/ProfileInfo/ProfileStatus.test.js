import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {

    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='Dima' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('Dima');
    });

    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status='Dima'/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test('after creation input should be displayed', () => {
        const component = create(<ProfileStatus status='Dima'/>);
        const root = component.root;
        
        expect(() => {
            const input = root.findByType('input');
        }).toThrow();
    });

    test('after creation span should be displayed with correct status', () => {
        const component = create(<ProfileStatus status='Dima'/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.InnerText).toBe('Dima');
    });

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status='Dima'/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('Dima');
    });

    test('callbeck should be called', () => {
        const mockCallbeck = jest.fn();
        const component = create(<ProfileStatus status='Dima' updateStatus={ mockCallbeck } />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallbeck.mock.calls.length).toBe(1);
    });
});
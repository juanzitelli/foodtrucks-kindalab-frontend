import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import '@testing-library/jest-dom'
import LocationForm from '../../components/LocationForm/index';
import { act } from 'react-dom/test-utils';
import { startFetchingPlaces } from '../../redux/actions/places.actions';

jest.mock("./../../redux/actions/places.actions.ts", () => ({
	startFetchingPlaces: jest.fn(),
}))

const middlewares = [thunk];
const createMockStore = configureStore(middlewares);

const initState = {
	foodTrucks: {
		foodTrucks: [],
	},
	places: {
		selectedPrediction: null,
		predictions: []
	},
	ui: {
		foodTrucksLoaded: true,
	}
};

let mockStore = createMockStore(initState)

mockStore.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={mockStore}>
		<LocationForm />
	</Provider>)

describe('Tests on LocationForm component', () => {

	beforeEach(() => {
		mockStore = createMockStore(initState);
		jest.clearAllMocks();
		jest.resetModules()
	})

	test('Should match snapshot', async () => {
		expect(wrapper).toMatchSnapshot();
	})

	test("Should call the startFetchingPlaces action when location input's value changes", () => {

		const locationInput = wrapper.find('input[name="location"]')

		const locationInputOnChangeHandler = locationInput.prop('onChange')!

		const e: React.FormEvent<HTMLInputElement> = {
			//@ts-ignore
			currentTarget: {
				name: 'location',
				value: 'Rosario',
			}
		}

		act(() => {
			locationInputOnChangeHandler(e);
		})

		expect(startFetchingPlaces).toHaveBeenCalled();
	})

	test('Should render a prediction span if the store has one', () => {
		const initState = {
			foodTrucks: {
				foodTrucks: [],
			},
			places: {
				selectedPrediction: null,
				predictions: [{
					description: "Rosario, Santa Fe",
					place_id: "123"
				}]
			},
			ui: {
				foodTrucksLoaded: true,
			}
		};

		let mockStore = createMockStore(initState)
		mockStore.dispatch = jest.fn()

		const wrapper = mount(
			<Provider store={mockStore}>
				<LocationForm />
			</Provider>)

		expect(wrapper.find('span').text()).toEqual("Rosario, Santa Fe")
	})

})
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import configureStore from "redux-mock-store"
import Map from '../../components/Map';

const middlewares = [thunk];
const createMockStore = configureStore(middlewares);
const initState = {
	foodTrucks: []
};
const mockStore = createMockStore(initState)
mockStore.dispatch = jest.fn();

describe('Tests on Map component', () => {
	const wrapper = shallow(
		<Provider store={mockStore}>
			<Map  />
		</Provider>)
	test('Should match snapshot', async () => {
		expect(wrapper).toMatchSnapshot();
	})
})

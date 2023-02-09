import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../templates/Home';
import Login from '../templates/Login';
import PasswordRecovery from '../templates/PasswordRecovery';
import SendEmail from '../templates/SendEmail';
import NewPassword from '../templates/NewPassword';
import MyAccount from '../templates/MyAccount';
import CreateAccount from '../templates/CreateAccount';
import Checkout from '../templates/Checkout';
import Orders from '../templates/Orders';
import NotFound from '../templates/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../Hooks/useInitialState';
import '../styles/global.css';
import OrderItem from '../components/OrderItem';



const App = () => {
	const initialState = useInitialState();
	return (

	<AppContext.Provider value = {initialState}>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/new-password" element={<NewPassword />} />
					<Route exact path="/send-email" element={<SendEmail />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<CreateAccount />} />
					<Route exact path="/account" element={<MyAccount />} />
					<Route exact path="/checkout" element={<Checkout />} />
					<Route exact path="/orders" element={<Orders />} />
					<Route exact path="/" element={<Home />} />
					<Route exact path="orderitem" element={<OrderItem />} />
					<Route exact path="/password-recovery" element={<PasswordRecovery />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</AppContext.Provider>
	);
};

export default App;
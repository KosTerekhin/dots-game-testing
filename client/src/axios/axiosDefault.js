import Axios from 'axios';

export default Axios.create({
	baseURL: 'https://young-refuge-81500.herokuapp.com/api',
	headers: {
		common: {
			'Content-Type': 'application/json'
		}
	}
});

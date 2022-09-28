export default (favs = [], action) => {
	switch (action.type) {
		case "GET":
			return action.payload;
        case 'CREATE':
            return [...favs, action.payload];
        default:
            return favs;
	}
};

import { transformUser } from '../transformers';

export const getUser = (loginToFind) =>
	fetch(`http://localhost:3005/users/?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([user]) => user && transformUser(user));

// BFF - Backend For Frontend
import { getUser } from './get-user';
import { addUser } from './add-user';
import { createSession } from './create-session';

export const server = {
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'User not found!',
				response: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Wrong password!',
				response: null,
			};
		}

		return {
			error: null,
			response: createSession(user.role_id),
		};
	},
	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);
		if (user) {
			return {
				error: 'Already registred!',
				response: null,
			};
		}

		await addUser(regLogin, regPassword);

		const session = {
			logout() {
				Object.keys(session).forEach((key) => delete session[key]);
			},
			removeComment() {
				console.log('Удаление комментария');
			},
		};

		return {
			error: null,
			response: createSession(user.role_id),
		};
	},
};

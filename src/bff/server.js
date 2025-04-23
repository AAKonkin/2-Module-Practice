// BFF - Backend For Frontend
import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions.js';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'User not found!',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Wrong password!',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);
		if (user) {
			return {
				error: 'Already registred!',
				res: null,
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
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};

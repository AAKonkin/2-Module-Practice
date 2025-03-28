import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Footer } from './components';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
`;

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

function Blog() {
	return (
		<AppColumn>
			<Header />
			<Content>
				<H2>Content</H2>
				<Routes>
					<Route path="/" element={<div>Main page</div>} />
					<Route path="/login" element={<div>Login page</div>} />
					<Route
						path="/register"
						element={<div>Register page</div>}
					/>
					<Route path="/users" element={<div>Users page</div>} />
					<Route
						path="/post/:post_id"
						element={<div>Post page</div>}
					/>
					<Route path="/post" element={<div>New Post page</div>} />
					<Route path="*" element={<div>Error page</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
}

export default Blog;

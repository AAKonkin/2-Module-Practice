import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

const Header = () => <div>Header</div>;
const Footer = () => <div>Footer</div>;

function Blog() {
	return (
		<>
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
		</>
	);
}

export default Blog;

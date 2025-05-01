import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import { H2 } from '../../components';
import { useServerRequest } from '../../hooks';
import { PostContent, Comments, PostForm } from './components';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const requestServer = useServerRequest();
	const dispatch = useDispatch();
	const isCreating = useMatch('/post');
	const isEditing = useMatch('/post/:id/edit');
	const params = useParams();
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) return;

		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, dispatch, params.id, isCreating]);
	return (
		<div className={className}>
			{isCreating || isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;

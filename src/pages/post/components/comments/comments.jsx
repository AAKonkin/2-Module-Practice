import { Icon } from '../../../../components/';
import { useState } from 'react';
import { Comment } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId, selectUserRole } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../actions';
import styled from 'styled-components';
import { ROLE } from '../../../../constants';

const CommentsConteiner = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	const requestServer = useServerRequest();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						value={newComment}
						placeholder="Комментарий..."
						onChange={({ target }) => setNewComment(target.value)}
					></textarea>
					<Icon
						id="fa-paper-plane-o"
						margin="0 0 0 10px"
						size="18px"
						onClick={() =>
							onNewCommentAdd(userId, postId, newComment)
						}
					/>
				</div>
			)}
			<div className="comments">
				{comments.map(({ id, content, author, publishedAt }) => (
					<Comment
						key={id}
						postId={postId}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsConteiner)`
	width: 580px;
	margin: 20px auto;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}

	& .new-comment textarea {
		width: 550px;
		resize: none;
		height: 120px;
		font-size: 18px;
	}
`;

import { Icon } from '../../../../../../components';
import { useDispatch } from 'react-redux';
import {
	openModal,
	CLOSE_MODAL,
	removeCommentAsync,
} from '../../../../../../actions';
import { useServerRequest } from '../../../../../../hooks';
import styled from 'styled-components';

const CommentContainer = ({
	className,
	postId,
	id,
	author,
	content,
	publishedAt,
}) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onCommentRemove = (postId, id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							inactive={true}
							id="fa-user-circle-o"
							margin="0 10px 0 0"
							size="18px"
						/>
						{author}
					</div>
					<div className="publishedAt">
						<Icon
							inactive={true}
							id="fa-calendar-o"
							margin="0 10px 0 0"
							size="18px"
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 10px"
				size="18px"
				onClick={() => onCommentRemove(postId, id)}
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	margin-top: 10px;

	& .comment {
		width: 550px;
		border: 1px solid black;
		padding: 5px 10px;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .publishedAt {
		display: flex;
	}
`;

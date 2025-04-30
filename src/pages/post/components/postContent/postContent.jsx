import { H2, Icon } from '../../../../components';
import styled from 'styled-components';

const PostContentConteiner = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img
				src={
					imageUrl ||
					'https://i.pinimg.com/originals/5e/c9/ee/5ec9ee5d7ee09690b49b532aba06d8c6.jpg'
				}
				alt={title}
			/>
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon id="fa-calendar-o" margin="0 10px 0 0" size="18px" />
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon
						id="fa-pencil-square-o"
						margin="0 10px 0 0"
						size="21px"
					/>
					<Icon id="fa-trash-o" margin="0 0 0 0" size="21px" />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentConteiner)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}
	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
	}
	& .published-at {
		display: flex;
		font-size: 18px;
	}
	& i {
		position: relative;
		top: -1px;
	}
	& .buttons {
		display: flex;
	}
	& .post-text {
		font-size: 18px;
	}
`;

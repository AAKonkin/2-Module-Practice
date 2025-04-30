import styled from 'styled-components';
import { Icon } from '../../../../components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" margin="0 10px 0 0" size="18px" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				{/* <Icon id="fa-floppy-o" margin="0 10px 0 0" size="21px" /> */}
				<Icon id="fa-trash-o" margin="0 0 0 0" size="21px" />
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

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
`;

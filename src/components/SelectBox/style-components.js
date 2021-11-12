import styled from 'styled-components'

export const Container = styled.div`
	width: ${(props) => props.width || '100%'};
`
export const Dropdown = styled.div`
	position: relative;

	.active {
		&:after {
			content: '';
			top: calc(50% - 2px);
			right: 10px;
			border: solid transparent 4px;
			height: 0;
			width: 0;
			position: absolute;
			border-top-color: #000;
			margin-left: -4px;
			transform: rotateX(180deg);
			transition: 0.3s ease-in-out;
		}
	}
`
export const Selected = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	padding: 0 20px 0 10px;
	font-size: 14px;
	border: 1px solid #eeeeeeff;
	position: relative;
	cursor: pointer;
	user-select: none;

	&::after {
		content: '';
		top: calc(50% - 2px);
		right: 10px;
		border: solid transparent 4px;
		height: 0;
		width: 0;
		position: absolute;
		border-top-color: #000;
		margin-left: -4px;
		transition: 0.3s ease-in-out;
	}
`
export const Menu = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	border: 1px solid #eeeeeeff;
	border-top: 0;
	background-color: #fff;
	z-index: 5;
	user-select: none;
`
export const Items = styled.div`
	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-track {
		background: red;
	}

	&::-webkit-scrollbar-thumb {
		background: #888;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #555;
	}

	max-height: 210px;
	overflow-y: auto;

	.item {
		padding: 10px;
		border-bottom: 1px solid #eeeeeeff;
		font-size: 14px;
		cursor: pointer;
		transition: 0.2s ease-in-out;

		&:last-child {
			margin-bottom: 0;
		}

		&:hover {
			background-color: #eeeeeeff;
		}
	}

	.selected,
	.selected:hover {
		background: rgba(1, 14, 40, 0.7);
		color: #fff;
	}
`

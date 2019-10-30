import styled from 'styled-components';

const color = 'blue';

const Button = styled.button`
	color: ${(props) => props.kulay};
	background: ${color};
	font-size: ${(props) => (props.big ? '5rem' : '1rem')};

	padding: 1rem;
	margin: 1rem;
`;

export default Button;

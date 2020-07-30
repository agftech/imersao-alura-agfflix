/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterBase = styled.footer`
	background: var(--black);
	border-top: 2px solid var(--secondary);
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 32px;
	padding-bottom: 32px;
	color: var(--white);
	text-align: center;
	@media (max-width: 800px) {
		margin-bottom: 50px;
	}
`;

import React from 'react';
import PropTypes from 'prop-types';

export default function CardWrapper({ children, title }) {
	return (
		<div className="card">
			<div className="card-details">
				<h2>{title}</h2>
			</div>
			{children}
		</div>
	)
}
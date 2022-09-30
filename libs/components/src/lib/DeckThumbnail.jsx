
import React from 'react'
import { capitalize, underscorize } from '@fl/utils'
import { Link } from 'react-router-dom'

export const DeckThumbnail = (props) => {
	const { deck } = props
	if (!deck) return <div />

	return (
		<Link className='link' to={underscorize(`/decktypes/${deck.name}${props.format ? `?format=${props.format}` : ''}`)}>
			<div className="deckThumbnail">
				<h3>{capitalize(deck.name, true)}</h3>
				<div className="deckThumbnail-flexbox">
					<img
						className="deckThumbnail-image"
						src={`/images/artworks/${deck.leftCardYpdId}.jpg`}
						onError={(e) => {
							e.target.onerror = null
							e.target.src = "/images/artworks/question.jpg"
						}}
					/>
					<img
						className="deckThumbnail-image"
						src={`/images/artworks/${deck.centerCardYpdId}.jpg`}
						onError={(e) => {
							e.target.onerror = null
							e.target.src = "/images/artworks/question.jpg"
						}}
					/>
					<img
						className="deckThumbnail-image"
						src={`/images/artworks/${deck.rightCardYpdId}.jpg`}
						onError={(e) => {
							e.target.onerror = null
							e.target.src = "/images/artworks/question.jpg"
						}}
					/>
				</div>
			</div>
		</Link>
	)
}

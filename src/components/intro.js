import React from "react"
import "../App.scss"

export default function Intro(props) {
	return (
		<div className="gridLinks3">
			<div className="box"></div>

			<div className="box bgColourGrey">
				<article>
					<h2>Intro</h2>
					<img src={require("../assets/pic01.jpg")} alt="Picture for article" />
					<p>My name is Thomas Plamondon. I'm half Swiss and half Canadian. I like to watch anime, read manga, play Weiss Schwarz, and play computer games in my free time.</p>
					<p>
						Currently, I play a lot of Final Fantasy 14 as a Miqo'te, with my main job being white mage. I enjoy JRPG's such as the Hyperdimension Neptunia series. I also play lots of War Thunder and Genshin Impact. Some mobile games I play are Fate/Grand Order, Girls Frontline, and
						Arknights.
					</p>
					<p>
						I read many different manga's. Some of my favourites are "Sousou no Frieren" and "Onii-chan is done for". I've also watched lot's of different anime, such as Journey of Elaina, Princess Connect: ReDive, Love Live!, and Madoka Magica. I also like to collect figure's, and own
						several different figures.
					</p>
					<p>I also study Japanese every day using anki flashcards. My goal is to be able to read manga without having to rely on translations.</p>
				</article>
			</div>

			<div className="box"></div>
		</div>
	)
}

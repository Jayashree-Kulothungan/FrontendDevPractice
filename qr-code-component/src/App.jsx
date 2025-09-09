import "./App.css";

function App() {
	return (
		<>
			<main>
				<article className="card">
					<img
						className="qrcode"
						src="/images/image-qr-code.png"
						alt="Qr Code"
					></img>
					<section className="card-texts">
						<h1 className="text-1">
							Improve your front-end skills by building projects
						</h1>
						<p className="text-2">
							Scan the QR code to visit Frontend Mentor and take your coding
							skills to the next level
						</p>
					</section>
				</article>
			</main>
		</>
	);
}

export default App;

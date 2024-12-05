import type { ComponentChildren } from 'preact';
import './Welcome.css';

export const Welcome = ({
	children: counter,
	posts,
}: {
	children: ComponentChildren;
	posts?: {
		body: string;
		id: number;
		userId: number;
		title: string;
	}[];
}) => {
	return (
		<div className="l-page">
			<header>
				<div className="l-container l-flex row">
					<div>
						<h1>Hello!</h1>
						<p>
							Let's look at some posts! Note: the counter on this page is a client-side Preact component; the rest is server-rendered! The counter won't render if you disable JavaScript. Try it!
						</p>
						<p>
						Content courtesy of{' '}
						<a href="https://jsonplaceholder.typicode.com">JSONPlaceholder</a>.
						</p>
					</div>
				<div style="align-self: flex-start;margin-left: auto">{counter}</div>
				</div>
			</header>
			<main className="l-stack">
				<div className="l-container l-flex"></div>
				<div className="l-container">
					<h2>Posts</h2>
				</div>
				<div className="l-container">
					<div className="l-flex c-posts">
						{posts?.map((post) => (
							<div key={post.id} className="l-box c-card">
								<h3>
									<a href={`/posts/${post.id}`}>{post.title}</a>
								</h3>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
};

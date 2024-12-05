import type { ComponentChildren } from 'preact';
import { getCollection } from 'astro:content';
import './Welcome.css';

const posts = await getCollection('posts');

export const Welcome = ({
	children: counter,
}: {
	children: ComponentChildren;
}) => {
	return (
		<div class="l-page">
			<header>
				<div className="l-container l-flex gap-4 row nowrap">
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
				<div className="l-container">
					<h2>Posts</h2>
				</div>
				<div className="l-container">
					<div className="l-flex c-posts">
						{posts?.map((post) => (
							<div key={post.id} className="l-box c-card">
								<h3>
									<a href={`/posts/${post.id}`}>{post.data.title}</a>
								</h3>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
};

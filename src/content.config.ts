import { defineCollection, z } from "astro:content";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const posts = defineCollection({
	loader: async () => {
		const res = await fetch(`${BASE_URL}/posts`);
		const data = await res.json();
		return data.map((post: any) => {
			post.id = post.id.toString();
			post.userId = post.userId.toString();

			return post;
		})
	},
	schema: z.object({
		body: z.string(),
		id: z.string(),
		title: z.string(),
		userId: z.string(),
	}),
});

const users = defineCollection({
	loader: async () => {
		const res = await fetch(`${BASE_URL}/users`);
		const data = await res.json();
		return data.map((user: any) => {
			user.id = user.id.toString();
			return user;
		});
	},
	schema: z.object({
		id: z.string(),
		name: z.string(),
		username: z.string(),
		email: z.string(),
		address: z.object({
			street: z.string(),
			suite: z.string(),
			city: z.string(),
			zipcode: z.string(),
			geo: z.object({
				lat: z.string(),
				lng: z.string(),
			}),
		}),
		phone: z.string(),
		website: z.string(),
		company: z.object({
			name: z.string(),
			catchPhrase: z.string(),
			bs: z.string(),
		}),
	}),
});


export const collections = { posts, users };

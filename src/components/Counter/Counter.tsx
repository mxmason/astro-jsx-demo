import { useLayoutEffect, useRef, useState } from 'preact/hooks';
import { animate } from 'motion';

export const Counter = () => {
	const ref = useRef<HTMLSpanElement>(null);
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prev) => prev + 1);
	};

	useLayoutEffect(() => {
		if(ref.current && count > 0) {
		animate(
			ref.current,
			{ y: [0, -5, 2, 0] },
			{ ease: ['easeIn', 'easeOut'] },
		);
		}
	}, [count]);

	return (
		<div>
			<p>
				Count:{' '}
				<span ref={ref} style="display:inline-block">
					{count}
				</span>
			</p>
			<button onClick={increment}>click me</button>
		</div>
	);
};

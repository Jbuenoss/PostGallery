import { Posts } from './Posts.jsx';
import { render, screen } from '@testing-library/react';

const props = {
    posts: [
        {
            id: 0,
            title: 'title 0',
            body: 'body 0',
            cover: 'img0.png'
        },
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            cover: 'img1.png'
        }
    ]
}

describe('<Posts />', () => {
    it('should render posts', () => {
        render(<Posts allposts={props.posts} />);

        expect(screen.getAllByRole('heading', {name: /title/i}))
            .toHaveLength(2);
        expect(screen.getAllByRole('img', {name: /title/i}))
            .toHaveLength(2);
        expect(screen.getAllByText(/body/i))
            .toHaveLength(2);
    });

    it('should not render posts', () => {
        render(<Posts />);

        expect(screen.queryByRole('heading', {name: /title/i}))
            .not.toBeInTheDocument();
        
    });

    it('should match snapshot', () => {
        const {container} = render(<Posts allposts={props.posts} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
import { render, screen } from "@testing-library/react"
import { PostCard } from "./PostCard"
import { PostCardMock } from "./mock";

describe('<PostCard />', () => {

    it('should render PostCard correctly', () => {
        // const {debug} = render(<PostCard post={PostCardMock}/>);
        // debug();
        render(<PostCard post={PostCardMock}/>);

        expect(screen.getByRole('img', { name: PostCardMock.title }))
            .toHaveAttribute('src', PostCardMock.cover);
        expect(screen.getByRole('heading', { name: PostCardMock.title }))
            .toBeInTheDocument();
        expect(screen.getByText('body 0')).toBeInTheDocument();
    })

    it('should match snapshot', () => {
        const {container} = render(<PostCard post={PostCardMock}/>);
        expect(container.firstChild).toMatchSnapshot();
    })

})

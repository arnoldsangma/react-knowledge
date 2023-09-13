import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 mt-2 pt-4">
            <div>
                <h3 className='text-4xl text-center'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
               bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;
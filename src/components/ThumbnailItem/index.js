// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails

  const onClickImage = () => {
    updateImage(id)
  }

  const activeTabClassName = isActive ? 'active-image' : ''
  return (
    <li>
      <button onClick={onClickImage} type="button">
        <img
          src={thumbnailUrl}
          className={`thumbnail-image ${activeTabClassName}`}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

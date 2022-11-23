import fallbackImage from '../../assets/image/image-broken.png'

interface IImageProps {
  src: string
  alt: string
}

const Image = ({ src, alt }: IImageProps) => {
  return (
    <img
      src={src}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null
        currentTarget.src = fallbackImage
      }}
      alt={alt}
    />
  )
}

export default Image

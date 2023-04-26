import {
  PackageItem,
  Place,
  PackageCard,
  PlaceName,
  PackageDesc,
} from './styledComponents'

const Package = props => {
  const {details} = props
  const {name, imageUrl, description} = details

  return (
    <PackageItem>
      <Place src={imageUrl} alt={name} />
      <PackageCard>
        <PlaceName>{name}</PlaceName>
        <PackageDesc>{description}</PackageDesc>
      </PackageCard>
    </PackageItem>
  )
}

export default Package

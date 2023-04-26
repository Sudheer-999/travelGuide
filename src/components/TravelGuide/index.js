import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BgContainer, LoaderView, Head, Packages} from './styledComponents'
import Package from '../Package'

class TravelGuide extends Component {
  state = {packageList: [], isLoading: true}

  componentDidMount() {
    this.getPackages()
  }

  getPackages = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'

    const response = await fetch(url)
    const data = await response.json()

    const updatedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))

    this.setState({packageList: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <LoaderView data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderView>
  )

  render() {
    const {packageList, isLoading} = this.state
    console.log(packageList)

    return (
      <BgContainer>
        <Head>Travel Guide</Head>
        {isLoading ? (
          this.renderLoader()
        ) : (
          <Packages>
            {packageList.map(each => (
              <Package details={each} key={each.id} />
            ))}
          </Packages>
        )}
      </BgContainer>
    )
  }
}

export default TravelGuide

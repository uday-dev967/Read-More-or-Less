import {useState} from 'react'
import {AppContainer, Image, Button, Heading} from './styledComponents'

const ReadMore = props => {
  const [readMore, setReadMore] = useState(false)
  const onClickToggleButton = () => setReadMore(prevState => !prevState)
  const {reactHooksDescription} = props
  const part = reactHooksDescription.slice(0, 171)
  const content = readMore ? reactHooksDescription : part
  const button = readMore ? 'Read Less' : 'Read More'
  return (
    <AppContainer>
      <Heading>React Hooks</Heading>
      <p>Hooks are a new addition to React</p>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <p>{content}</p>
      <Button type="button" onClick={onClickToggleButton}>
        {button}
      </Button>
    </AppContainer>
  )
}

export default ReadMore

import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const MdxPostBody = ({ content }: Props) => {

  return (
    <div className="max-w-2xl mx-auto">
      {content}
    </div>
  )
}

export default MdxPostBody

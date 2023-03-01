import { packs } from '~/src'
import { Packs } from '~/src/types'


module Types {
    export type Props = Packs.Next.LinkProps & {
        withATag?: boolean
        target?: '_self' | '_blank'
    }
}


export const Link: React.FC<Types.Props> = ({
  children,
  target,
  withATag = true,
  ...linkProps
}) => {

  return (
    <packs.next.Link {...linkProps}>
      {withATag ? <a target={target}>{children}</a> : children}
    </packs.next.Link>
  )
}
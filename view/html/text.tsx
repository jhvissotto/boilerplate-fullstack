import { helpers } from '~/src'

module Types {
    export type Props = {
        as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    }
}

export const Text: React.FC<Types.Props> = ({ as, children, ...props }) => {
    return (
        <helpers.Element.Create tag={as} props={props}>
            {children}
        </helpers.Element.Create>
    )
}